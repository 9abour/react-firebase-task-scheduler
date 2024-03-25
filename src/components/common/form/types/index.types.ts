import { FormEvent } from "react";
import { ReactNode } from "react";
import { ITarget } from "../hooks/types/index.types";

export type InputType = {
	label?: string;
	name: string;
	type: string;
	placeholder: string;
	customStyles?: string;
	icon?: ReactNode;
	required?: boolean;
	autoFocus?: boolean;
	handleChangeValue?: ({ value, key }: Record<string, string>) => void;
	validationError?: string;
	disabled?: boolean;
	initialValue?: string;
};

export type FormPropsType = {
	inputs: InputType[];
	submitText: string;
	formText: string;
	submitFunc: (e: FormEvent) => void;
	onFormValueChange?: ({ value, key }: Record<string, string>) => void;
	validationErrors: Record<string, string>;
	customStyles?: string;
	disabled?: boolean;
	children?: JSX.Element;
	loading?: boolean;
};

export type SearchBarProps = {
	changeValue: (e: ITarget) => void;
	value: string;
	placeholder: string;
	customStyles?: string;
};

export type TextAreaType = {
	label?: string;
	name: string;
	placeholder: string;
	errorValidation?: string;
	customStyles?: string;
	handleChangeValue?: ({ value, key }: Record<string, string>) => void;
	validationError?: string;
	disabled?: boolean;
	initialValue?: string;
};
