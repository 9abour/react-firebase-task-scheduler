import { useEffect } from "react";
import useToggle from "../../../../hooks/click-handlers/useToggle";
import EyeButton from "../../button/components/EyeButton";
import useInput from "../hooks/useInput";
import { InputType } from "../types/index.types";

const Input = ({
	label,
	type,
	name,
	placeholder,
	customStyles,
	icon,
	autoFocus,
	handleChangeValue,
	validationError,
	disabled,
	initialValue = "",
}: InputType) => {
	const { value, onChange } = useInput(initialValue);
	const { currentState, toggle } = useToggle(false);

	const inputStyles = `input ${icon ? "pl-12" : ""} ${
		type == "password" ? "pr-12" : ""
	} transition-all`;

	useEffect(() => {
		if (handleChangeValue) {
			handleChangeValue({ value: value, key: name });
		}
	}, [value]);

	return (
		<div className={`relative flex flex-col ${customStyles}`}>
			{label ? <label>{label}</label> : null}
			<input
				type={type == "password" && currentState ? "text" : type}
				value={value}
				onChange={onChange}
				className={inputStyles}
				placeholder={placeholder}
				autoFocus={autoFocus}
				disabled={disabled}
			/>

			{type == "password" ? (
				<div>
					<EyeButton
						isShowPassword={currentState}
						toggle={toggle}
						error={validationError}
					/>
				</div>
			) : null}

			<span className="absolute left-4 top-2/4 -translate-y-2/4 text-grey-monsoon">
				{icon}
			</span>

			{validationError ? (
				<p className="text-red-600">{validationError}</p>
			) : null}
		</div>
	);
};

export default Input;
