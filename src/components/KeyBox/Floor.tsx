import { Key, type KeyProps } from "./Key";

export type Props = {
	name: string;
	keys: KeyProps[];
};

// TODO: Style this component

export const Floor = ({ name, keys }: Props) => {
	return (
		<div className="bg-purple-600 rounded-xl p-5 border-2 border-white">
			<div className="text-center text-2xl text-white font-bold italic mb-5">
				{name}
			</div>
			<div className="grid gap-3 sm:gap-5 lg:gap-8 xl:gap-12 grid-cols-4 sm:grid-cols-6 lg:grid-cols-8">
				{keys.map((key) => (
					<Key key={key.name} {...key} />
				))}
			</div>
		</div>
	);
};
