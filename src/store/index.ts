import { configureStore } from "@reduxjs/toolkit";
import teacherSlice from "./slices/teacherSlice";
import keySlice from "./slices/keySlice";
import { Key, Teacher } from "../types/models";

export type ReduxState = {
	teachers: Teacher[];
	keys: Key[];
};

const store = configureStore({
	reducer: {
		teachers: teacherSlice,
		keys: keySlice,
	},
});

export default store;
