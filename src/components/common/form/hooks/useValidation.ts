import { useState } from "react";
import ValidationsHelper from "../../../../helpers/validations";
import { FormValuesType } from "../../../../types/index.types";
import { InputType } from "../types/index.types";

/**
 * A custom hook for performing form validation.
 * @param {InputType[]} inputs - An array of input configurations.
 * @returns {object} An object containing errors and a validation function.
 * @property {Record<string, string>} errors - An object containing error messages for each input.
 * @property {function} validationCheck - A function to perform validation on form values.
 */

const useValidation = (inputs: InputType[]) => {
	const [errors, setErrors] = useState<Record<string, string>>({});

	const validationCheck = async (
		formValues: FormValuesType
	): Promise<boolean> => {
		const newErrors: Record<string, string> = {};

		for (const input of inputs) {
			const { name, type, required } = input;
			const value = formValues[name];

			if (type === "email" && !ValidationsHelper.validateEmail(value)) {
				newErrors[name] = "Invalid email address";
			} else if (!value.trim() && required) {
				newErrors[name] = "Required";
			} else if (
				name === "confirmPassword" &&
				formValues["confirmPassword"] !== formValues["password"]
			) {
				newErrors[name] = "Password does not match";
			} else {
				newErrors[name] = "";
			}
		}

		setErrors(newErrors);
		return Object.values(newErrors).some(error => error.length > 0);
	};

	return { errors, validationCheck };
};

export { useValidation };
