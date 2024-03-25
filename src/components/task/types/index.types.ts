import { TaskType } from "../../../rtk/slices/types/task.types";
import { ITarget } from "../../common/form/hooks/types/index.types";

export type TaskCardType = {
	task: {
		id: string;
		title: string;
		description: string;
		priority: string;
		status: boolean;
		dueDate: string;
		addedAt: string;
	};
	handleToggleTask: () => void;
};

export type TaskListItemPropsType = {
	task: TaskType;
	tableView: boolean | null;
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

export type FilterOptions = {
	name: string;
	options: string[];
}[];

export type FilterMobPropsType = {
	filterOptions: FilterOptions;
	handleChangeActiveFilterOptions: (key: string, value: string) => void;
	dateValue: string;
	handleDateChange: (e: ITarget) => void;
};

export type UseFilterType = {
	filterOptions: FilterOptions;
	activeFilterOptions: Record<string, string>;
	setActiveFilterOptions: (activeFilterOptions: Record<string, string>) => void;
};
