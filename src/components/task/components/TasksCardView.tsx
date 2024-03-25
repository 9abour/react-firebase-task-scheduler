import { useAppSelector } from "../../../rtk/app/hooks";
import TaskCard from "./TaskCard/TaskCard";

const TasksCardView = () => {
	const { tasks, filteredTasks } = useAppSelector(state => state.task.data);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{(filteredTasks.length ? filteredTasks : tasks).map(task => (
				<TaskCard key={task.title} {...task} />
			))}
		</div>
	);
};

export default TasksCardView;
