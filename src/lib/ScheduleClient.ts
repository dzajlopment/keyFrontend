import { Room } from "../types/models";
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
		const corsUrl = "https://dzajcors.shuttleapp.rs/";
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
		if (weekDay === 6 || weekDay === 7) {
			return null;
		}

		const html = await this.getData(
			`https://www.zsti.gliwice.pl/plan/plany/s${id}.html`
		);
		const table = new Table(html);

		const schedule = table.getDays();
		const hours = table.getHours();

		const day = schedule[weekDay];

		return this.transformSchedule(day, hours);
	}

	async getTodaysRoomSchedule(id: string) {
		const date = new Date();
		const weekDay = date.getDay();

		return await this.getRoomDaySchedule(id, weekDay);
	}
}

export const schedule = ScheduleClient.getInstance();
