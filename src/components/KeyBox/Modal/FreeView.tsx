import { useEffect, useState } from "react";

import useTeachers from "../../../hooks/useTeachers";
import { LessonHint, Teacher } from "../../../types/models";
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
	
	const [lessonHint, setLessonHint] = useState<LessonHint>();

	async function getLessonHint() {
		const room = schedule.getRooms()?.find((room) => room.name === keyName);
		console.log(schedule.getRooms());
		
		if (room) {
			setLessonHint(await schedule.getLessonHint(room.id))
		}
	}

	useEffect(() => {
	  getLessonHint()
	}, [])

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
		<div className="flex">
			<CustomCombobox items={items} />
			<div>
				{ lessonHint?.message === "no_more_lessons_today" ? (
					<p>
						Nie ma dzisiaj więcej lekcji tutaj
					</p>
				) : (null)}
				{ lessonHint?.message === "no_lessons_todayy" ? (
					<p>
						Nie ma dzisiaj lekcji tutaj
					</p>
				) : (null)}
				{ lessonHint?.message === "next_lesson" || lessonHint?.message === "current_next_lesson" ? (
					<div>
						<p>
							Następna lekcja
						</p>
						<p>
							Nauczyciel: { lessonHint.nextLesson?.teacher }
						</p>
						<p>
							Od: { lessonHint.nextLesson?.timeFrom } do { lessonHint.nextLesson?.timeTo }
						</p>
					</div>
				) : (null)}
				{ lessonHint?.message === "current_lesson" || lessonHint?.message === "current_next_lesson" ? (
					<div>
						<p>
							Obecna lekcja
						</p>
						<p>
							Nauczyciel: { lessonHint.currentLesson?.teacher }
						</p>
						<p>
							Od: { lessonHint.currentLesson?.timeFrom } do { lessonHint.currentLesson?.timeTo }
						</p>
					</div>
				) : (null)}
			</div>
		</div>
	);
};

export default FreeView;
