import { Room } from "../types/models";
import axios from "axios";
import { TimetableList } from "@wulkanowy/timetable-parser";

export default class ScheduleClient {
	private static instance: ScheduleClient;
	private rooms: Room[] | null;

	static getInstance() {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new ScheduleClient();
		return this.instance;
	}

	async syncRooms() {
		const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
		const targetUrl = "https://www.zsti.gliwice.pl/plan/lista.html";
		const fullUrl = corsAnywhereUrl + targetUrl;

		const html = await axios.get(fullUrl).then((response) => response.data);

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
}
