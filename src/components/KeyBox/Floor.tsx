import { Key, type KeyProps } from "./Key";

export type Props = {
	name: string;
	keys: KeyProps[];
};

export const Floor = ({ name, keys }: Props) => {
	return (
		<div className="rounded-xl p-5">
			<div className="text-2xl font-medium text-slate-900 tracking-tight">
				{name}
			</div>
			<div className="grid mt-5 ">
				{keys.map((key) => (
					<Key key={key.name} {...key} />
				))}
			</div>
		</div>
	);
};
