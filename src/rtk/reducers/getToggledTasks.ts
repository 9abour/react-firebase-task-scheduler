import { TaskType } from "../slices/types/task.types";

const getToggledTasks = (tasks: TaskType[], taskId: string) => {
	const toggledTasks = tasks.map(task => {
		if (task.id === taskId) {
			return {
				...task,
				status: !task.status,
			};
		} else {
			return task;
		}
	});

	return toggledTasks;
};

export { getToggledTasks };
