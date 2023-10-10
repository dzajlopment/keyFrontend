import { type Key } from "../../types/models";
import { Floor } from "./Floor";
import useKeys from "../../hooks/useKeys";

const getFloorKeys = (keys: Key[], floor: number) =>
	keys.filter((key) => key.floor === floor);

const KeyBox = () => {
	const { keys } = useKeys();

	return (
		<section className="bg-black py-10">
			<div className="container flex flex-col gap-8">
				<Floor name="Piwnica / Parter" keys={getFloorKeys(keys, 0)} />
				<Floor name="Pierwsze piętro" keys={getFloorKeys(keys, 1)} />
				<Floor name="Drugie piętro" keys={getFloorKeys(keys, 2)} />
				<Floor name="Trzecie piętro" keys={getFloorKeys(keys, 3)} />
			</div>
		</section>
	);
};

export default KeyBox;
