import { useEffect, useState } from "react";

import useTeachers from "../../../hooks/useTeachers";
import { Teacher } from "../../../types/models";
import CustomSelect from "../../UI/CustomCombobox";
import * as Select from '@radix-ui/react-select';
import { Command } from "cmdk";


const FreeView = () => {

	const { teachers } = useTeachers()

	const [value, setValue] = useState<Teacher>({
		id: 0,
		name: ""
	})	

	const items = teachers.map((teacher: Teacher) => {
		return (
			<Command.Item
				className={`p-1 ${value.id == teacher.id ? "bg-black text-white" : "bg-white text-black hover:bg-gray-300"}`}
                key={teacher.id}
                onSelect={() => {
                  setValue(teacher.id === value.id ? {id: 0, name: "" } : teacher)
                }}
				value={teacher.name}
            >
              {teacher.name}
            </Command.Item>
		) 
	})

	return <div>
		<CustomSelect items={items} />
	</div>;
};

export default FreeView;
