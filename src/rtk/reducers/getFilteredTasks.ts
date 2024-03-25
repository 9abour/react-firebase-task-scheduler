import { TaskType } from "../slices/types/task.types";

/**
 * Filters tasks based on provided options.
 * @param {Record<string, string>} options - The filter options.
 * @param {TaskType[]} tasks - The array of tasks to filter.
 * @returns {{ filteredTasks: TaskType[], activeOptions: [string, string][] }} An object containing the filtered tasks and active filter options.
 */

const getFilteredTasks = (
	options: Record<string, string>,
	tasks: TaskType[]
) => {
	const activeOptions = Object.entries(options).filter(([, value]) => value);

	let filteredTasks: TaskType[] = [...tasks];

	activeOptions.forEach(([key, value]) => {
		if (key === "date") {
			const ascending = value === "ascending";

			filteredTasks.sort((a, b) =>
				ascending
					? Number(new Date(b.dueDate)) - Number(new Date(a.dueDate))
					: Number(new Date(a.dueDate)) - Number(new Date(b.dueDate))
			);
		} else {
			filteredTasks = filteredTasks.filter(
				task => String(task[key as keyof TaskType]) === value
			);
		}
	});

	return { filteredTasks, activeOptions };
};

export { getFilteredTasks };
