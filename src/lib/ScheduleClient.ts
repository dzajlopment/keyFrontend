import { LessonHint, Room } from "../types/models";
import axios from "axios";
import {
	TimetableList,
	Table,
	type TableLesson,
	type TableHour,
} from "@wulkanowy/timetable-parser";

export class ScheduleClient {
	private static instance: ScheduleClient;
	private rooms: Room[] | null = null;

	static getInstance() {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new ScheduleClient();
		return this.instance;
	}

	getRooms() {
		return this.rooms;
	}

	private async getData(url: string) {
		const corsUrl = "https://cors-anywhere.herokuapp.com/";
		const fullUrl = corsUrl + url;
		const html = await axios.get(fullUrl).then((response) => response.data);
		return html;
	}

	async syncRooms() {
		const html = await this.getData(
			"https://www.zsti.gliwice.pl/plan/lista.html"
		);

		const table = new TimetableList(html);
		
		//* Get data about rooms from school schedule and transform it
		const rooms = table.getList().rooms?.map((room) => {
			return {
				name: room.name,
				id: room.value,
			};
		}) as Room[] | null;

		this.rooms = rooms;
	}

	private transformSchedule(
		day: TableLesson[][],
		hours: Record<number, TableHour>
	) {
		return day.map((subject, index) => {
			return { ...subject[0], ...hours[index] };
		});
	}

	async getRoomWeekSchedule(id: string) {
		const html = await this.getData(
			`https://www.zsti.gliwice.pl/plan/plany/s${id}.html`
		);

		const table = new Table(html);

		const schedule = table.getDays();
		const hours = table.getHours();

		return schedule.map((day) => this.transformSchedule(day, hours));
	}

	async getRoomDaySchedule(id: string, weekDay: number) {

		function normalizeTime(timeString: string) {
			return `${(Number(timeString.split(":")[0]) < 10 ? '0' : '') + timeString.split(":")[0]}:${timeString.split(":")[1]}`
		}

		if (weekDay === 6 || weekDay === 7) {
			return null;
		}

		const html = await this.getData(
			`https://www.zsti.gliwice.pl/plan/plany/s${id}.html`
		);
		const table = new Table(html);

		const schedule = table.getDays();
		const hours = table.getHours();

		Object.keys(hours).forEach((index: string) => {
			hours[index as unknown as number].timeFrom = normalizeTime(hours[index as unknown as number].timeFrom)
			hours[index as unknown as number].timeTo = normalizeTime(hours[index as unknown as number].timeTo)
		})
	
		const day = schedule[weekDay - 1];
		
		return this.transformSchedule(day, hours);
	}

	async getTodaysRoomSchedule(id: string) {
		const date = new Date();
		const weekDay = date.getDay();

		return await this.getRoomDaySchedule(id, weekDay);
	}

	async getLessonHint(roomId: string): Promise<LessonHint> {
		let todaysLessons = await this.getRoomDaySchedule(roomId, 1)
		console.log(todaysLessons);
		
		// new Date().getDay()
		if (!todaysLessons) {
			return {
				message: "no_lessons_today"
			}
		} else {
			todaysLessons = todaysLessons?.filter((lesson: TableLesson) => lesson.subject)
			console.log(todaysLessons);
			
			if (!todaysLessons) {
				return {
					message: "no_lessons_today"
				}
			}

			// const nowTime = `${(new Date().getHours() < 10 ? '0' : '') + new Date().getHours()}:${(new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()}`
			const nowTime = "08:30"
			if (todaysLessons.length === 1) {
				if (nowTime < todaysLessons[0].timeFrom) {
					return {
						message: "next_lesson",
						nextLesson: {
							teacher: todaysLessons[0].teacherId as string,
							timeFrom: todaysLessons[0].timeFrom,
							timeTo: todaysLessons[0].timeTo
						}
					}
				}
				if (nowTime > todaysLessons[0].timeFrom && nowTime < todaysLessons[0].timeTo) {
					return {
						message: "current_lesson",
						currentLesson: {
							teacher: todaysLessons[0].teacherId as string,
							timeFrom: todaysLessons[0].timeFrom,
							timeTo: todaysLessons[0].timeTo
						}
					}
				}
				if (nowTime > todaysLessons[0].timeTo) {
					return {
						message: "no_more_lessons_today",
					}
				}
			} else {
				for (let i = 0; i < todaysLessons.length; i++) {
					if (nowTime < todaysLessons[0].timeFrom) {
						return {
							message: "next_lesson",
							nextLesson: {
								teacher: todaysLessons[0].teacherId as string,
								timeFrom: todaysLessons[0].timeFrom,
								timeTo: todaysLessons[0].timeTo
							}
						}
					} else if (i === todaysLessons.length - 1) {
						if (nowTime > todaysLessons[i].timeTo) {
							return {
								message: "no_more_lessons_today",
							}
						}
					} else {
						if (nowTime > todaysLessons[i].timeFrom && nowTime < todaysLessons[i + 1].timeTo) {
							if (nowTime > todaysLessons[i].timeTo && nowTime < todaysLessons[i + 1].timeFrom) {
								return {
									message: "next_lesson",
									nextLesson: {
										teacher: todaysLessons[i + 1].teacherId as string,
										timeFrom: todaysLessons[i + 1].timeFrom,
										timeTo: todaysLessons[i + 1].timeTo
									}
								}
							} 
							else {
								return {
									message: "current_next_lesson",
									currentLesson : {
										teacher: todaysLessons[i].teacherId as string,
										timeFrom: todaysLessons[i].timeFrom,
										timeTo: todaysLessons[i].timeTo
									},
									nextLesson: {
										teacher: todaysLessons[i + 1].teacherId as string,
										timeFrom: todaysLessons[i + 1].timeFrom,
										timeTo: todaysLessons[i + 1].timeTo
									}
								}
							}
						}
					}
				}
			}
		}

		return {
			message: "no_lessons_today"
		}
	}
}

export const schedule = ScheduleClient.getInstance();
