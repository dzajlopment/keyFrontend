import { createSlice } from "@reduxjs/toolkit";
import { Key } from "../../types/models";

export const keySlice = createSlice({
	name: "key",
	initialState: [] as Key[],
	reducers: {
		set: (state, { payload }) => {
			state = payload;
			return state;
		},
		borrow: (state, { payload }) => {
			const key = state.map((key) => {
				if (key.name === payload.name) {
					key.owner = payload.teacherId;
				}
				return key;
			});

			return key;
		},

		returnKey: (state, { payload }) => {
			const key = state.map((key) => {
				if (key.name === payload.name) {
					key.owner = null;
				}
				return key;
			});

			return key;
		},
	},
});

export const { set, borrow, returnKey } = keySlice.actions;

export default keySlice.reducer;
