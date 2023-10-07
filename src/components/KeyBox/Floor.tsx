import Key, { type KeyProps } from "./Key";

export type Props = {
	name: string;
	keys: KeyProps[];
};

// TODO: Style this component

const Floor = ({ name, keys }: Props) => {
	return (
		<div>
			<div>{name}</div>
			<div>
				{keys.map((key) => (
					<Key key={key.id} {...key} />
				))}
			</div>
		</div>
	);
};

export default Floor;
