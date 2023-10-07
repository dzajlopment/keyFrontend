import { ReduxState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../store/slices/teacherSlice";
import { Teacher } from "../types/models";

const useTeachers = () => {
	const { teachers } = useSelector((state) => state as ReduxState);

	const dispatch = useDispatch();

	const setTeachers = (teachers: Teacher[]) => dispatch(set(teachers));

	return {
		teachers,
		setTeachers,
	};
};

export default useTeachers;
