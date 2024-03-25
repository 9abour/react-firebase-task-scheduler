import { toggleUiCompletedTask } from "../../../rtk/slices/taskSlice";
import { useAppDispatch } from "../../../rtk/app/hooks";
import { useToggleTask } from "../hooks/useToggleTask";
import TaskTableItem from "./TaskTableItem";
import TaskCard from "./TaskCard/TaskCard";
import { TaskListItemPropsType } from "../types/index.types";

const TaskListItem = ({ task, tableView }: TaskListItemPropsType) => {
	const { id, status } = task;
	const { toggleTask } = useToggleTask();
	const dispatch = useAppDispatch();

	const handleToggleTask = () => {
		toggleTask(id, !status);
		dispatch(toggleUiCompletedTask(id));
	};

	return tableView ? (
		<TaskTableItem task={task} handleToggleTask={handleToggleTask} />
	) : (
		<TaskCard task={task} handleToggleTask={handleToggleTask} />
	);
};

export default TaskListItem;
