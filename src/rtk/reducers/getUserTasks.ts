import { createAsyncThunk } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import FirebaseHelpers from "../../helpers/firebase";
import toast from "react-hot-toast";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { TaskType } from "../slices/types/task.types";

/**
 * Fetches tasks associated with a user from Firestore asynchronously.
 * @function getUserTasks
 * @memberof module:task
 * @param {string} userId - The ID of the user whose tasks are to be fetched.
 * @returns {Promise<Array<TaskType>>} A promise that resolves with an array of tasks associated with the user.
 */

const getUserTasks = createAsyncThunk(
	"task/getUserTasks",
	async (userId: string) => {
		try {
			const userDocRef = doc(db, "users", userId);
			const userDocSnapshot = await getDoc(userDocRef);

			const userData = userDocSnapshot.data();
			const taskIds = userData?.tasks || [];

			const tasksPromises = taskIds.map(async (taskId: string) => {
				const taskDocRef = doc(db, "tasks", taskId);
				const taskDocSnapshot = await getDoc(taskDocRef);

				const taskData = taskDocSnapshot.data();
				return taskData as TaskType;
			});

			const tasks = await Promise.all(tasksPromises);
			return tasks;
		} catch (error) {
			if (error instanceof FirebaseError) {
				toast.error(FirebaseHelpers.generateFirebaseErrorMessage(error));
			}
		}
	}
);

export { getUserTasks };
