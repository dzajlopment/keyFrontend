import { createSlice } from "@reduxjs/toolkit";

const websocketSlice = createSlice({
	name: "websocket",
	initialState: null,
	reducers: {
		setWebSocket: (_, { payload }) => {
			return payload;
		},
		clearWebSocket: () => {
			return null;
		},
	},
});

export const { setWebSocket, clearWebSocket } = websocketSlice.actions;

export default websocketSlice.reducer;
