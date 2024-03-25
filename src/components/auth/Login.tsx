import Form from "../../components/common/form/components/Form";
import { loginFormInputsData } from "./data/auth";
import useHandleFormInputChange from "../../components/common/form/hooks/useHandleFormInputChange";
import { useLogin } from "./hooks/useLogin";
import { useValidation } from "../../components/common/form/hooks/useValidation";
import { useFetch } from "../../hooks/useFetch";

const Login = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();
	const { loading, fetchData } = useFetch();

	const { login } = useLogin();

	const { errors, validationCheck } = useValidation(loginFormInputsData);

	const handleSubmit = async () => {
		const isError = await validationCheck(formValues);

		if (!isError) {
			fetchData(async () => {
				await login(formValues.email, formValues.password);
			});
		}
	};

	return (
		<Form
			inputs={loginFormInputsData}
			submitText="Login"
			submitFunc={handleSubmit}
			formText="Welcome back"
			onFormValueChange={onFormValueChange}
			validationErrors={errors}
			customStyles="w-full max-w-[800px] mx-auto mt-12 px-4"
			loading={loading}
		/>
	);
};

export default Login;
