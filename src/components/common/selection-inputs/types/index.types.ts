export type RadioButtonType = {
	checkboxWithLabelList: CheckboxWithLabelType[];
	customStyles?: string;
};

export type CheckboxType = {
	customStyles?: string;
	bgColor: string;
	borderColor: string;
	label?: CheckboxLabelType;
};

export interface CheckboxWithLabelType extends CheckboxType {
	label: CheckboxLabelType;
	checked: boolean | null;
	toggle?: (labelId: string) => void;
}

export type CheckboxLabelType = {
	id: string;
	name: string;
};

export type useGenerateCheckboxStylesType = {
	checked?: boolean | null;
	bgColor: string;
	borderColor: string;
	customStyles?: string;
};

export type DropdownType = {
	active: string;
	options: {
		value: string;
		name: string;
	}[];
	changePriority: (priority: string) => void;
};
