import { useEffect } from "react";
import useInput from "../hooks/useInput";
import { TextAreaType } from "../types/index.types";

const Textarea = ({
	label,
	name,
	placeholder,
	customStyles,
	errorValidation,
	handleChangeValue,
	disabled,
	initialValue = "",
}: TextAreaType) => {
	const { value, onChange } = useInput(initialValue);

	useEffect(() => {
		if (handleChangeValue) {
			handleChangeValue({ value: value, key: name });
		}
	}, [value]);

	return (
		<div className={`relative flex flex-col ${customStyles}`}>
			{label ? <label>{label}</label> : null}

			<textarea
				value={value}
				onChange={onChange}
				className={`w-full min-h-[200px] py-2 px-4 text-grey-monsoon bg-primary-hawkesBlue rounded-md border-[1.5px] border-grey-iron hover:border-primary-ceruleanBlue focus:border-primary-ceruleanBlue outline-none transition-all resize-none ${customStyles}`}
				placeholder={placeholder}
				disabled={disabled}
			/>

			{errorValidation ? (
				<p className="text-red-600">{errorValidation}</p>
			) : null}
		</div>
	);
};

export default Textarea;
