import { ReduxState } from "../store";
import { useSelector } from "react-redux";

const selectWS = (state: ReduxState) => state.ws;

const useWS = () => {
	const ws = useSelector(selectWS);

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
