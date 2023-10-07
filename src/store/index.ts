import { configureStore } from "@reduxjs/toolkit";
import teacherSlice from "./slices/teacherSlice";
import keySlice from "./slices/keySlice";
import { Key, Teacher } from "../types/models";
import websocketSlice from "./slices/websocketSlice";

export type ReduxState = {
	teachers: Teacher[];
	keys: Key[];
	ws: WebSocket;
};

const store = configureStore({
	reducer: {
		teachers: teacherSlice,
		keys: keySlice,
		ws: websocketSlice,
	},
});

export default store;
