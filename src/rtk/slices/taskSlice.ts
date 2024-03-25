import { createSlice } from "@reduxjs/toolkit";
import { TaskSliceInitialStateType, TaskType } from "./types/task.types";
import { postTask } from "../reducers/postTask";
import { getUserTasks } from "../reducers/getUserTasks";
import { deleteTask } from "../reducers/deleteTask";

const initialState: TaskSliceInitialStateType = {
	data: {
		tasks: [],
		filteredTasks: [],
		filter: false,
		isLoading: true,
	},
};

const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		searchTasks: (state, action) => {
			const searchValue = action.payload;

			if (searchValue.length <= 0) {
				state.data.filteredTasks = [];
				state.data.filter = false;
				return;
			}

			const searchResult = state.data.tasks.filter(task =>
				task.title.toLowerCase().includes(searchValue.toLowerCase())
			);

			state.data.filteredTasks = searchResult;
			state.data.filter = true;
		},

		filterTasksOptions: (state, action) => {
			const optionsToFilter = action.payload;
			const activeOptions = Object.entries(optionsToFilter).filter(
				([, value]) => value
			);
			let filteredTasks: TaskType[] = [...state.data.tasks];

			activeOptions.forEach(([key, value]) => {
				if (key === "date") {
					const ascending = value === "ascending";

					filteredTasks.sort((a, b) =>
						ascending
							? Number(new Date(b.dueDate)) - Number(new Date(a.dueDate))
							: Number(new Date(a.dueDate)) - Number(new Date(b.dueDate))
					);
				} else {
					filteredTasks = filteredTasks.filter(
						task => String(task[key as keyof TaskType]) === value
					);
				}
			});

			state.data.filteredTasks = filteredTasks;
			state.data.filter = activeOptions.length > 0;
		},

		toggleUiCompletedTask: (state, action) => {
			const taskId = action.payload;

			const updated = state.data.tasks.map(task => {
				if (task.id === taskId) {
					return {
						...task,
						status: !task.status,
					};
				} else {
					return task;
				}
			});

			state.data.tasks = updated;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(postTask.fulfilled, (state, action) => {
				if (action.payload) {
					state.data.tasks.push(action.payload);
					state.data.isLoading = false;
				}
			})
			.addCase(postTask.pending, state => {
				state.data.isLoading = true;
			})
			.addCase(postTask.rejected, state => {
				state.data.isLoading = false;
			})
			.addCase(getUserTasks.fulfilled, (state, action) => {
				if (action.payload) {
					state.data.tasks = action.payload;
					state.data.isLoading = false;
				}
			})
			.addCase(deleteTask.fulfilled, (state, action) => {
				const taskId = action.payload;
				const filteredTasks = state.data.tasks.filter(
					task => task.id !== taskId
				);

				state.data.tasks = filteredTasks;
			});
	},
});

export default taskSlice.reducer;
export const { searchTasks, filterTasksOptions, toggleUiCompletedTask } =
	taskSlice.actions;
export { postTask };
