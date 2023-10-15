import { schedule } from "../../../lib/ScheduleClient";

type Props = {
	keyName: string;
};

const OccupiedView = ({ keyName }: Props) => {
	const room = schedule.getRooms()?.find((room) => room.name === keyName);

	if (room) {
		schedule.getTodaysRoomSchedule(room.id).then((data) => console.log(data));
	}

	return <div>OccupiedView</div>;
};

export default OccupiedView;
