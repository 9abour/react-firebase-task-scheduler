import { InputType } from "../../../components/common/form/types/index.types";

const registerFormInputsData = [
	{
		name: "firstName",
		type: "text",
		placeholder: "First Name",
		required: true,
		customStyles: "col-span-4 sm:col-span-2",
	},
	{
		name: "lastName",
		type: "text",
		placeholder: "Last Name",
		customStyles: "col-span-4 sm:col-span-2",
	},
	{
		name: "email",
		type: "email",
		placeholder: "Email",
		customStyles: "col-span-4 sm:col-span-4",
	},
	{
		name: "password",
		type: "password",
		placeholder: "Password",
		required: true,
		customStyles: "col-span-4 sm:col-span-4",
	},
	{
		name: "confirmPassword",
		type: "password",
		placeholder: "Confirm Password",
		required: true,
		customStyles: "col-span-4 sm:col-span-4",
	},
];
const loginFormInputsData: InputType[] = [
	{
		name: "email",
		type: "email",
		placeholder: "Email",
		customStyles: "col-span-4 sm:col-span-4",
		autoFocus: true,
	},
	{
		name: "password",
		type: "password",
		placeholder: "Password",
		required: true,
		customStyles: "col-span-4 sm:col-span-4",
	},
];

const userProfileFormInputsData = [
	{
		name: "firstName",
		type: "text",
		placeholder: "First Name",
		required: true,
		disabled: true,
		customStyles: "col-span-4 sm:col-span-2",
	},
	{
		name: "lastName",
		type: "text",
		placeholder: "Last Name",
		disabled: true,
		customStyles: "col-span-4 sm:col-span-2",
	},
	{
		name: "email",
		type: "email",
		placeholder: "Email",
		disabled: true,
		customStyles: "col-span-4 sm:col-span-4",
	},
	{
		name: "password",
		type: "password",
		placeholder: "Password",
		required: true,
		disabled: true,
		customStyles: "col-span-4 sm:col-span-4",
	},
];

export {
	registerFormInputsData,
	loginFormInputsData,
	userProfileFormInputsData,
};
