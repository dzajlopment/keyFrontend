import { useState, useEffect } from "react";
import { cn } from "../../utils/tailwind";

export type Props = {
	id: string;
	owner: string | null;
	onClick?: () => void;
};

const basicStyle = "rounded";

const Key = ({ id, owner, onClick }: Props) => {
	const [isEnabled, setIsEnabled] = useState(false);

	useEffect(() => {
		setIsEnabled(!!owner);
	}, [owner]);

	const clickHandler = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<button
			onClick={clickHandler}
			className={cn(basicStyle, isEnabled ? "bg-green-500" : "bg-red-500")}>
			{id}
		</button>
	);
};

export default Key;
