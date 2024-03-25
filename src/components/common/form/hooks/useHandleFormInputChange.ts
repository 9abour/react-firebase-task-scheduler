import { useState } from "react";

/**
 * A custom hook to handle form input changes.
 * @param {Record<string, string>} [defaultFormValues] - The default form values.
 * @returns {{
 *   formValues: Record<string, string>,
 *   onFormValueChange: (params: { value: string, key: string }) => void
 * }} An object containing formValues and onFormValueChange function.
 */

const useHandleFormInputChange = (
	defaultFormValues?: Record<string, string>
) => {
	const [formValues, setFormValues] = useState<Record<string, string>>(
		defaultFormValues || {}
	);

	const onFormValueChange = ({ value, key }: Record<string, string>) => {
		setFormValues(prevFormValues => ({ ...prevFormValues, [key]: value }));
	};

	return {
		formValues,
		onFormValueChange,
	};
};

export default useHandleFormInputChange;
