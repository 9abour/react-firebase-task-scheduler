import { createAsyncThunk } from "@reduxjs/toolkit";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const deleteTask = createAsyncThunk(
	"tasks/deleteTask",
	async (taskId: string) => {
		const userId = auth.currentUser?.uid || "";
		const usersRef = doc(db, "users", userId);

		await deleteDoc(doc(db, "tasks", taskId));
		await updateDoc(usersRef, {
			tasks: arrayRemove(taskId),
		});

		return taskId;
	}
);

export { deleteTask };
