import { Key, type KeyProps } from "./Key";

export type Props = {
	name: string;
	keys: KeyProps[];
};

export const Floor = ({ name, keys }: Props) => {
	return (
		<div className="rounded-xl p-5">
			<div className="text-3xl font-medium text-slate-800 tracking-tight">
				{name}
			</div>
			<div className="grid mt-5 gap-5 auto-fit-grid ">
				{keys.map((key) => (
					<Key key={key.name} {...key} className="aspect-[3/2]" />
				))}
			</div>
		</div>
	);
};
