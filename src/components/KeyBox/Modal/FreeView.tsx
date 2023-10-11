import useTeachers from "../../../hooks/useTeachers";
import { Teacher } from "../../../types/models";
import CustomSelect from "../../UI/CustomSelect";
import * as Select from '@radix-ui/react-select';

const FreeView = () => {

	const { teachers } = useTeachers()

	const items = teachers.map((teacher: Teacher) => {
		return (
			<Select.Item className="hover:bg-gray-200 cursor-pointer py-2 px-4" value={teacher.id.toString()} key={teacher.id}>
      			<Select.ItemText>{teacher.name}</Select.ItemText>
    		</Select.Item>
		) 
	})

	return <div>
		<CustomSelect items={items} />
	</div>;
};

export default FreeView;
