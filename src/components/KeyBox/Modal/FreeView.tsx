import { useState } from "react";

import useTeachers from "../../../hooks/useTeachers";
import { Teacher } from "../../../types/models";
import { Command } from "cmdk";
import CustomCombobox from "../../UI/TeacherCombobox";
import { schedule } from "../../../lib/ScheduleClient";

type Props = {
	keyName: string;
};

const FreeView = ({ keyName }: Props) => {
	const { teachers } = useTeachers();

	const [value, setValue] = useState<Teacher>({
		id: 0,
		name: "",
	});
	
	async function getLessonHint() {
		const room = schedule.getRooms()?.find((room) => room.name === keyName);
		console.log(schedule.getRooms());
		
		if (room) {
			const lessonHint = await schedule.getLessonHint(room.id);
			console.log(lessonHint);
		}
	}

	getLessonHint()

	const items = teachers.map((teacher: Teacher) => {
		return (
			<Command.Item
				className={`p-1 ${
					value.id == teacher.id
						? "bg-slate-800 text-slate-100"
						: "bg-white text-black hover:bg-gray-300"
				}`}
				key={teacher.id}
				onSelect={() => {
					setValue(teacher.id === value.id ? { id: 0, name: "" } : teacher);
				}}
				value={teacher.name}>
				{teacher.name}
			</Command.Item>
		);
	});

	return (
		<div>
			<CustomCombobox items={items} />
		</div>
	);
};

export default FreeView;
