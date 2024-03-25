import { useAppSelector } from "../../../rtk/app/hooks";
import TaskListItem from "./TaskListItem";

const TaskList = ({ tableView }: { tableView: boolean | null }) => {
	const { tasks, filteredTasks, filter } = useAppSelector(
		state => state.task.data
	);

	const uiTasks = filter ? filteredTasks : tasks;

	return !tableView ? (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{uiTasks.map(task => (
				<TaskListItem key={task.id} task={task} tableView={tableView} />
			))}
		</div>
	) : (
		<div className="overflow-x-auto table-container">
			<table>
				<thead>
					<tr>
						<th>Priority</th>
						<th>Title</th>
						<th>Due Date</th>
						<th>Description</th>
						<th>Added At</th>
						<th>Status</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{uiTasks.map(task => (
						<TaskListItem key={task.id} task={task} tableView={tableView} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TaskList;
