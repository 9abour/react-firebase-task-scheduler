import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const useToggleTask = () => {
	const toggleTask = async (taskId: string, status: boolean) => {
		const taskRef = doc(db, "tasks", taskId);

		await updateDoc(taskRef, {
			status,
		});
	};

	return {
		toggleTask,
	};
};

export { useToggleTask };
