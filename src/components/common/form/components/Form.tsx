import { FormPropsType } from "../types/index.types";
import TextButton from "../../button/components/TextButton";
import Input from "./Input";
import { FormEvent } from "react";
import Textarea from "./Textarea";

const Form = ({
	submitText,
	inputs,
	formText,
	submitFunc,
	onFormValueChange,
	validationErrors,
	customStyles,
	disabled,
	children,
	loading,
}: FormPropsType) => {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		submitFunc(e);
	};

	return (
		<div className={customStyles}>
			<h3 className="text-h3">{formText}</h3>

			<form className="grid grid-cols-4 gap-2" onSubmit={handleSubmit}>
				{inputs.map(input =>
					input.type === "textarea" ? (
						<Textarea
							key={input.name}
							{...input}
							handleChangeValue={onFormValueChange}
							validationError={validationErrors[input.name]}
							disabled={disabled}
						/>
					) : (
						<Input
							key={input.name}
							{...input}
							handleChangeValue={onFormValueChange}
							validationError={validationErrors[input.name]}
							disabled={disabled}
							initialValue={input.initialValue}
						/>
					)
				)}

				{children}

				<TextButton
					type="submit"
					text={submitText}
					customStyles="col-span-4 my-2 font-medium text-xl text-white bg-primary-ceruleanBlue hover:bg-opacity-90 transition-all"
					disabled={disabled}
					loading={loading}
				/>
			</form>
		</div>
	);
};

export default Form;
