import { createSlice } from "@reduxjs/toolkit";
import { Key } from "../../types/models";

export const keySlice = createSlice({
	name: "key",
	initialState: [] as Key[],
	reducers: {
		set: (state, { payload }) => {
			state = payload;
		},
		borrow: (state, { payload }) => {
			const key = state.find((key) => key.name === payload.name);

			if (!key) {
				throw new Error(`Key ${payload.name} not found!`);
			}

			key.owner = payload.teacherId;
		},

		//? return is a reserved keyword and i can't

		returnKey: (state, { payload }) => {
			const key = state.find((key) => key.name === payload.name);

			if (!key) {
				throw new Error(`Key ${payload.name} not found!`);
			}

			key.owner = null;
		},
	},
});

export const { set, borrow, returnKey } = keySlice.actions;

export default keySlice.reducer;
