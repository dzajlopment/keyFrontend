import { type Key } from "../../types/models";
import { Floor } from "./Floor";
import useKeys from "../../hooks/useKeys";

const getFloorKeys = (keys: Key[], floor: number) =>
	keys.filter((key) => key.floor === floor);

const KeyBox = () => {
	const { keys } = useKeys();

	return (
		<section className="relative bg-slate-50 rounded-xl overflow-hidden h-full">
			<div
				style={{
					backgroundPosition: "10px 10px",
				}}
				className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
			<div className="relative rounded-xl overflow-auto">
				<div className="flex flex-col">
					<Floor name="Piwnica / Parter" keys={getFloorKeys(keys, 0)} />
					<Floor name="Pierwsze piętro" keys={getFloorKeys(keys, 1)} />
					<Floor name="Drugie piętro" keys={getFloorKeys(keys, 2)} />
					<Floor name="Trzecie piętro" keys={getFloorKeys(keys, 3)} />
				</div>
			</div>
		</section>
	);
};

export default KeyBox;
