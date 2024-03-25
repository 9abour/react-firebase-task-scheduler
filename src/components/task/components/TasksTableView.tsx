import { useAppSelector } from "../../../rtk/app/hooks";
import TaskTableItem from "./TaskTableItem";

const TasksTableView = () => {
	const { tasks, filteredTasks } = useAppSelector(state => state.task.data);

	return (
		<div className="overflow-x-auto table-container">
			<table className="">
				<tr>
					<th>Priority</th>
					<th>Title</th>
					<th>Due Date</th>
					<th>Description</th>
					<th>Added At</th>
					<th>Status</th>
					<th>Actions</th>
				</tr>
				{(filteredTasks.length ? filteredTasks : tasks).map(task => (
					<TaskTableItem key={task.title} {...task} />
				))}
			</table>
		</div>
	);
};

export default TasksTableView;
