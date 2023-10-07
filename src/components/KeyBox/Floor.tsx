import { Key, type KeyProps } from "./Key";

export type Props = {
	name: string;
	keys: KeyProps[];
};

// TODO: Style this component

export const Floor = ({ name, keys }: Props) => {
	return (
		<div>
			<div>{name}</div>
			<div>
				{keys.map((key) => (
					<Key key={key.name} {...key} />
				))}
			</div>
		</div>
	);
};
