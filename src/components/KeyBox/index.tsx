import { type Key } from "../../types/models";
import { Floor } from "./Floor";
import useKeys from "../../hooks/useKeys";

const getFloorKeys = (keys: Key[], floor: number) =>
	keys.filter((key) => key.floor === floor);

const KeyBox = () => {
	const { keys } = useKeys();

	return (
		<section>
			<Floor name="Piwnica / Parter" keys={getFloorKeys(keys, 0)} />
			<Floor name="Pierwsze piętro" keys={getFloorKeys(keys, 1)} />
			<Floor name="Drugie piętro" keys={getFloorKeys(keys, 2)} />
			<Floor name="Trzecie piętro" keys={getFloorKeys(keys, 3)} />
		</section>
	);
};

export default KeyBox;
