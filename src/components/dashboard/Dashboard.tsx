import AddTaskForm from "../task/components/AddTaskForm";
import TasksList from "../task/components/TasksList";

const Dashboard = () => {
	return (
		<div className="w-full max-w-[1200px] mx-auto mt-12 px-4">
			<AddTaskForm />
			<TasksList />
		</div>
	);
};

export default Dashboard;
