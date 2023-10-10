import { useState } from "react";
import { type Key as KeyModel } from "../../types/models";
import { cn } from "../../utils/tailwind";
import Modal from "../UI/Modal";
import FreeView from "./Modal/FreeView";
import OccupiedView from "./Modal/OccupiedView";

export interface KeyProps
	extends React.HTMLAttributes<HTMLButtonElement>,
		KeyModel {}

export const Key = ({ name, owner, className, ...props }: KeyProps) => {
	const isEnabled = !!owner; // Detect if there is a owner
	const [isOpen, setIsOpen] = useState(false);

	//* To całe name będzie faktycnzie kiedyś imieniem i nazwiskiem nauczyciela ale tera to jest numer

	return (
		<>
			{isOpen && (
				<Modal
					title="Szczegóły"
					children={isEnabled ? <FreeView /> : <OccupiedView />}
					onClick={() => {
						setIsOpen(false);
					}}
				/>
			)}
			<button
				onClick={() => setIsOpen(true)}
				className={cn("key", isEnabled ? "key-free" : "key-occupied", className)} //TODO: Style button and its variations.
				{...props}>
				{name}
			</button>
		</>
	);
};
