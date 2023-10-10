import Heading from "./FloorHeading";
import { Key, type KeyProps } from "./Key";

export type Props = {
	name: string;
	keys: KeyProps[];
};

export const Floor = ({ name, keys }: Props) => {
	return (
		<div className="rounded-xl p-5">
			<Heading text={name} />
			<div className="grid mt-5 gap-5 auto-fit-grid mx-7">
				{keys.map((key) => (
					<Key key={key.name} {...key} className="aspect-[4/3]" />
				))}
			</div>
		</div>
	);
};
