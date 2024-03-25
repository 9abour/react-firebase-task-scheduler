import { combineReducers } from "@reduxjs/toolkit";
import taskSlice from "../slices/taskSlice";

const rootReducer = combineReducers({
	task: taskSlice,
});

export default rootReducer;
