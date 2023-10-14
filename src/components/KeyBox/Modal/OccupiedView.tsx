import { schedule } from "../../../lib/ScheduleClient";

type Props = {
	keyName: string;
};

const OccupiedView = ({ keyName }: Props) => {
	const room = schedule.getRooms()?.find((room) => room.name === keyName);

	console.log(room);

	return <div>OccupiedView</div>;
};

export default OccupiedView;
