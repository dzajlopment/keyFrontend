import { useSelector, useDispatch } from "react-redux";
import { type ReduxState } from "../store";
import { Key } from "../types/models";
import { set, borrow, returnKey as retKey } from "../store/slices/keySlice";

const selectKeys = (state: ReduxState) => state.keys;

const useKeys = () => {
	const keys = useSelector(selectKeys);

	const dispatch = useDispatch();

	const setKeys = (keys: Key[]) => dispatch(set(keys));
	const borrowKey = (keyName: string, teacherId: number) =>
		dispatch(borrow({ name: keyName, teacherId }));
	const returnKey = (keyName: string) => dispatch(retKey({ name: keyName }));

	return {
		keys,
		setKeys,
		borrowKey,
		returnKey,
	};
};

export default useKeys;
