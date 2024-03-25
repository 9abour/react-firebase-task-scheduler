import { useEffect, useState } from "react";
import { TaskType } from "../../../rtk/slices/types/task.types";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const useEditTask = (taskId: string | undefined) => {
	const [task, setTask] = useState<null | TaskType>(null);

	useEffect(() => {
		(async () => {
			if (taskId) {
				const tasksRef = doc(db, "tasks", taskId);
				const data = (await getDoc(tasksRef)).data() as TaskType;

				setTask(data);
			}
		})();
	}, []);

	return { task };
};

export { useEditTask };
