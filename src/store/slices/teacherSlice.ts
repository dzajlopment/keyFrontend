import { createSlice } from "@reduxjs/toolkit";
import { Teacher } from "../../types/models";

export const teacherSlice = createSlice({
	name: "teacher",
	initialState: [] as Teacher[],
	reducers: {
		set: (_, { payload }) => {
			return payload;
		},
	},
});

export const { set } = teacherSlice.actions;

export default teacherSlice.reducer;
