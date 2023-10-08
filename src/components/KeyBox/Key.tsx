import { useState } from "react";
import { type Key as KeyModel } from "../../types/models";
import { cn } from "../../utils/tailwind";
import Modal from "../UI/Modal";

export interface KeyProps
	extends React.HTMLAttributes<HTMLButtonElement>,
		KeyModel {}

export const Key = ({ name, owner, className, ...props }: KeyProps) => {
	const isEnabled = !!owner; // Detect if there is a owner
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{isOpen && (
				<Modal
					title="Filtr"
					children={<div>XD</div>}
					onClick={() => {
						setIsOpen(false);
					}}
				/>
			)}
			<button
				onClick={() => setIsOpen(true)}
				className={cn("key", isEnabled ? "key-enabled" : "key-disabled", className)} //TODO: Style button and its variations.
				{...props}>
				{name}
			</button>
		</>
	);
};
