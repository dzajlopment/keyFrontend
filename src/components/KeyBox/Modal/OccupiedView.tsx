import { schedule } from "../../../lib/ScheduleClient";

type Props = {
	keyName: string;
};

const OccupiedView = ({ keyName }: Props) => {
	const room = schedule.getRooms()?.find((room) => room.name === keyName);

	console.log(schedule.getRooms());

	if (room) {
		schedule.getRoomWeekSchedule(room.id).then((data) => console.log(data));
	}

	return <div>OccupiedView</div>;
};

export default OccupiedView;
