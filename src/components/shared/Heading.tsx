type Props = {
	text: string;
};

const Heading = ({ text }: Props) => {
	return (
		<header>
			<h3>{text}</h3>
		</header>
	);
};

export default Heading;
