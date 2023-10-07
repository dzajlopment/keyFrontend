import Key, { Props as KeyProps } from "./Key";

export type Props = {
	name: string;
	keys: KeyProps[];
};

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
