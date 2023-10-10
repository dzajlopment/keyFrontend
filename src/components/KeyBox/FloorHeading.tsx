type Props = {
	text: string;
};

const Heading = ({ text }: Props) => {
	return (
		<header className="text-3xl font-medium text-slate-800 tracking-tight relative">
			<div className="w-full bg-slate-800 h-0.5 rounded-full top-1/2 absolute -translate-y-1/2 z-0"></div>
			<h3 className="translate-x-5 z-10 ">
				<span className="bg-slate-50 px-2 z-10">{text}</span>
			</h3>
		</header>
	);
};

export default Heading;
