import Form from "../../components/common/form/components/Form";
import useHandleFormInputChange from "../../components/common/form/hooks/useHandleFormInputChange";
import { useValidation } from "../../components/common/form/hooks/useValidation";
import { useFetch } from "../../hooks/useFetch";
import { registerFormInputsData } from "./data/auth";
import { useRegister } from "./hooks/useRegsiter";

const Register = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();
	const { loading, fetchData } = useFetch();

	const { register } = useRegister();
	const { errors, validationCheck } = useValidation(registerFormInputsData);

	const handleSubmit = async () => {
		const isError = await validationCheck(formValues);

		if (!isError) {
			fetchData(async () => {
				await register(formValues);
			});
		}
	};

	return (
		<Form
			inputs={registerFormInputsData}
			submitText="Register"
			submitFunc={handleSubmit}
			formText="Create an account"
			onFormValueChange={onFormValueChange}
			validationErrors={errors}
			customStyles="w-full max-w-[800px] mx-auto mt-12 px-4"
			loading={loading}
		/>
	);
};

export default Register;
