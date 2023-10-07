import { configureStore } from "@reduxjs/toolkit";
import teacherSlice from "./slices/teacherSlice";
import keySlice from "./slices/keySlice";

const store = configureStore({
	reducer: {
		teachers: teacherSlice,
		keys: keySlice,
	},
});

export default store;
