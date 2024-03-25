export type TaskType = {
	id: string;
	title: string;
	description: string;
	priority: string;
	dueDate: string;
	status: boolean;
	addedAt: string;
};

export type TaskSliceInitialStateType = {
	data: {
		tasks: TaskType[];
		isLoading: boolean;
		filteredTasks: TaskType[];
		filter: boolean;
	};
};
