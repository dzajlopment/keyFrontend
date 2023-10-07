import { createSlice } from "@reduxjs/toolkit";
import { Teacher } from "../../types/models";

export const teacherSlice = createSlice({
	name: "teacher",
	initialState: [] as Teacher[],
	reducers: {
		set: (state, { payload }) => {
			state = payload;
		},
	},
});

export const { set } = teacherSlice.actions;

export default teacherSlice.reducer;
