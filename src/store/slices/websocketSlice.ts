import { createSlice } from "@reduxjs/toolkit";

const websocketSlice = createSlice({
	name: "websocket",
	initialState: null,
	reducers: {
		setWebSocket: (state, { payload }) => {
			state = payload;
		},
		clearWebSocket: (state) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			state = null;
		},
	},
});

export const { setWebSocket, clearWebSocket } = websocketSlice.actions;

export default websocketSlice.reducer;
