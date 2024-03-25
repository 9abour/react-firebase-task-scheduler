import { createSlice } from "@reduxjs/toolkit";
import { TaskSliceInitialStateType } from "./types/task.types";
import { postTask } from "../reducers/postTask";
import { getUserTasks } from "../reducers/getUserTasks";
import { deleteTask } from "../reducers/deleteTask";
import { getFilteredTasks } from "../reducers/getFilteredTasks";
import { getToggledTasks } from "../reducers/getToggledTasks";

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
			const { filteredTasks, activeOptions } = getFilteredTasks(
				optionsToFilter,
				state.data.tasks
			);

			state.data.filteredTasks = filteredTasks;
			state.data.filter = activeOptions.length > 0;
		},

		toggleUiCompletedTask: (state, action) => {
			const taskId = action.payload;

			const toggledTasks = getToggledTasks(state.data.tasks, taskId);
			const toggledFilteredTasks = getToggledTasks(
				state.data.filteredTasks,
				taskId
			);

			state.data = {
				...state.data,
				tasks: toggledTasks,
				filteredTasks: toggledFilteredTasks,
			};
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
			.addCase(deleteTask.pending, state => {
				state.data.isLoading = true;
			})
			.addCase(deleteTask.fulfilled, (state, action) => {
				state.data.isLoading = false;
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
