import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../../rtk/app/hooks";
import { postTask } from "../../../rtk/reducers/postTask";
import { TaskType } from "../../../rtk/slices/types/task.types";
import { FormValuesType } from "../../../types/index.types";
import moment from "moment";
import { useContext } from "react";
import AuthContext from "../../../context/authContext";
import { v4 as uuidv4 } from "uuid";

const useAddTask = (formValues: FormValuesType) => {
	const { title, description, priority, dueDate } = formValues;
	const dispatch = useAppDispatch();
	const { tasks } = useAppSelector(state => state.task.data);
	const { user } = useContext(AuthContext);
	const userId = user?.user.uid;

	const addTask = () => {
		const isDuplicate = tasks.find(task => task.title === formValues.title);
		if (!isDuplicate && userId) {
			const taskId = uuidv4();

			const newTask: TaskType = {
				id: taskId,
				title,
				description,
				priority,
				dueDate,
				status: false,
				addedAt: moment(new Date()).format(),
			};

			dispatch(postTask({ task: newTask, userId, taskId }));
		} else {
			toast.error("Task already exists with the same title");
		}
	};

	return { addTask };
};

export { useAddTask };
