import { createAsyncThunk } from "@reduxjs/toolkit";
import { TaskType } from "../slices/types/task.types";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import toast from "react-hot-toast";
import FirebaseHelpers from "../../helpers/firebase";
import { FirebaseError } from "firebase/app";

const postTask = createAsyncThunk(
	"task/postTask",
	async ({
		task,
		userId,
		taskId,
	}: {
		task: TaskType;
		userId: string;
		taskId: string;
	}) => {
		try {
			const tasksRef = doc(db, "tasks", taskId);
			const usersRef = doc(db, "users", userId);

			await setDoc(tasksRef, task);
			await updateDoc(usersRef, {
				tasks: arrayUnion(taskId),
			});

			return task;
		} catch (error) {
			if (error instanceof FirebaseError) {
				toast.error(FirebaseHelpers.generateFirebaseErrorMessage(error));
			}
		}
	}
);

export { postTask };
