import { ITarget } from "../../common/form/hooks/types/index.types";

export type TaskCardType = {
	id: string;
	title: string;
	description: string;
	priority: string;
	status: boolean;
	dueDate: string;
	addedAt: string;
};

export type FilterButtonType = {
	name: string;
	options: string[];
	handleChangeActiveFilterOptions: (key: string, value: string) => void;
};

export type DateFilterInputType = {
	value: string;
	changeValue: (e: ITarget) => void;
};

export type FilterMobPropsType = {
	filterOptions: {
		name: string;
		options: string[];
	}[];
	handleChangeActiveFilterOptions: (key: string, value: string) => void;
	dateValue: string;
	handleDateChange: (e: ITarget) => void;
};
