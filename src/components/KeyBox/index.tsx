import { Key } from "../../types/Key";
import { Floor } from "./Floor";

//* Just for testing
import DUMMY_DATA from "../../assets/DUMMY_DATA.json";

const getFloorKeys = (keys: Key[], floor: number) =>
	keys.filter((key) => key.floor === floor);

const KeyBox = () => {
	//TODO: Get data about keys from state or reducer and render.
	const keys = DUMMY_DATA.keys;

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
