import { ReduxState } from "../store";
import { useSelector } from "react-redux";

const useWS = () => {
	const { ws } = useSelector((state) => state as ReduxState);

	const send = (data: unknown) => {
		if (!ws) {
			throw new Error("Couldn't send message!");
		}

		ws.send(JSON.stringify(data));
	};

	return {
		ws,
		send,
	};
};

export default useWS;
