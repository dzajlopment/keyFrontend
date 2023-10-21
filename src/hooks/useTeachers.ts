import { ReduxState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../store/slices/teacherSlice";
import { Teacher } from "../types/models";

const selectTeachers = (state: ReduxState) => state.teachers;

const useTeachers = () => {
	const teachers = useSelector(selectTeachers);
	const dispatch = useDispatch();

	const setTeachers = (teachers: Teacher[]) => dispatch(set(teachers));

	return {
		teachers,
		setTeachers,
	};
};

export default useTeachers;
