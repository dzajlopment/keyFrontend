import React, { useEffect, useRef, useState } from "react";
import useKeys from "../../hooks/useKeys";

type Props = {
	url: string;
	children: React.ReactNode;
};

export type WebSocketChildProps = {
	send: (data: unknown) => void;
	ws: WebSocket | null;
};

const WebSocketProvider = ({ url, children }: Props) => {
	const [ws, setWs] = useState<WebSocket | null>(null);
	const wsRef = useRef<WebSocket | null>(null);
	const { setKeys } = useKeys();

	useEffect(() => {
		const newWs = new WebSocket(url);
		wsRef.current = newWs;

		newWs.onopen = () => {
			console.log("WebSocket connected");
		};

		newWs.onmessage = (event) => {
			const keys = JSON.parse(event.data.keys);
			setKeys(keys);
		};

		newWs.onclose = () => {
			console.log("WebSocket closed");
		};

		setWs(newWs);

		return () => {
			if (newWs.readyState === WebSocket.OPEN) {
				newWs.close();
			}
		};
	}, [url]);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const send = (data: unknown) => {
		if (ws) {
			return ws.send(JSON.stringify(data));
		}
		console.error("Couldn't send message");
	};

	const childrenWithProps = React.Children.map(children, (child) =>
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		React.cloneElement(child as React.ReactElement<any>, {
			ws: wsRef.current,
			send,
		})
	);

	return <>{childrenWithProps}</>;
};

export default WebSocketProvider;
