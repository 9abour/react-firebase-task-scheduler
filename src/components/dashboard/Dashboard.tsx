import AddTaskForm from "../task/components/AddTaskForm";
import TasksWrapper from "../task/components/TasksWrapper";

const Dashboard = () => {
	return (
		<div className="w-full max-w-[1200px] mx-auto mt-12 px-4">
			<AddTaskForm />
			<TasksWrapper />
		</div>
	);
};

export default Dashboard;
