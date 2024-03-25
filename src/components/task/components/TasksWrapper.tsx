import { useAppSelector } from "../../../rtk/app/hooks";
import Spinner from "../../common/loading/Spinner";
import Filter from "./filter/Filter";
import { useGetUserTasks } from "../hooks/useGetUserTasks";
import { FaList } from "react-icons/fa";
import { TbLayoutDashboard } from "react-icons/tb";
import useToggle from "../../../hooks/click-handlers/useToggle";
import EmptyTasks from "./EmptyTasks";
import TaskList from "./TaskList";

const TasksWrapper = () => {
	useGetUserTasks();

	const { tasks, isLoading, filteredTasks, filter } = useAppSelector(
		state => state.task.data
	);
	const { currentState: tableView, toggle: toggleTasksView } = useToggle(false);

	if (isLoading) return <Spinner customStyles="!h-[300px]" />;
	if (!isLoading && !tasks.length) return <EmptyTasks text="No tasks yet!" />;

	return (
		<div className="my-12">
			<div className="relative w-full grid grid-cols-10 gap-2 md:gap-6 mb-4">
				<Filter />
				<div className="col-span-2 md:col-span-1">
					<button className="button ml-auto" onClick={() => toggleTasksView()}>
						{tableView ? <FaList size={25} /> : <TbLayoutDashboard size={25} />}
					</button>
				</div>
			</div>

			{filter && !filteredTasks.length ? (
				<EmptyTasks text="No tasks found!" />
			) : (
				<TaskList tableView={tableView} />
			)}
		</div>
	);
};

export default TasksWrapper;
