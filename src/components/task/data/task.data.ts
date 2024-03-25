import { InputType } from "../../common/form/types/index.types";

const addTaskFormInputsData: InputType[] = [
	{
		name: "title",
		type: "text",
		placeholder: "Task title",
		required: true,
		autoFocus: true,
		customStyles: "col-span-4 sm:col-span-2",
	},
	{
		name: "dueDate",
		type: "date",
		placeholder: "",
		customStyles: "col-span-4 sm:col-span-2",
		required: true,
	},
	{
		name: "description",
		type: "textarea",
		placeholder: "Task Description",
		customStyles: "col-span-4 sm:col-span-4",
		required: true,
	},
];

const editTaskFormInputData: InputType[] = [
	{
		name: "title",
		type: "text",
		placeholder: "Task title",
		required: true,
		autoFocus: true,
		customStyles: "col-span-4",
	},
	{
		name: "description",
		type: "textarea",
		placeholder: "Task Description",
		customStyles: "col-span-4",
		required: true,
	},
];

const prioritiesOptions = [
	{ name: "high", value: "High" },
	{ name: "medium", value: "Medium" },
	{ name: "low", value: "Low" },
];

export { addTaskFormInputsData, editTaskFormInputData, prioritiesOptions };
