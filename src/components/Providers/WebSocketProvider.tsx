import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useKeys from "../../hooks/useKeys";
import {
	clearWebSocket,
	setWebSocket,
} from "../../store/slices/websocketSlice";
import useTeachers from "../../hooks/useTeachers";

type Props = {
	url: string;
	children: React.ReactNode;
};

export type WebSocketChildProps = {
	send: (data: unknown) => void;
	ws: WebSocket | null;
};

const WebSocketProvider = ({ url, children }: Props) => {
	const dispatch = useDispatch();
	const { setKeys } = useKeys();
	const { setTeachers } = useTeachers();

	useEffect(() => {
		const ws = new WebSocket(url);

		ws.onopen = () => {
			console.log("WebSocket connected");
			dispatch(setWebSocket(ws));
		};

		ws.onmessage = (event) => {
			const keys = JSON.parse(event.data?.keys);
			const teachers = JSON.parse(event.data?.teachers);

			if (teachers) {
				setTeachers(teachers);
			}

			if (keys) {
				setKeys(keys);
			}
		};

		ws.onclose = () => {
			console.log("WebSocket closed");
			dispatch(clearWebSocket());
		};

		return () => {
			if (ws.readyState === WebSocket.OPEN) {
				ws.close();
			}
		};
	}, [url]);

	return <>{children}</>;
};

export default WebSocketProvider;
