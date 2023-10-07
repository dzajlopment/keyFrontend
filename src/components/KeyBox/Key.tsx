import { Key as KeyModel } from "../../types/Key";
import { cn } from "../../utils/tailwind";

export interface KeyProps
	extends React.HTMLAttributes<HTMLButtonElement>,
		KeyModel {}

export const Key = ({ name, owner, className, ...props }: KeyProps) => {
	const isEnabled = !!owner; // Detect if there is a owner

	return (
		<button
			className={cn("key", isEnabled ? "key-enabled" : "key-disabled", className)} //TODO: Style button and its variations.
			{...props}>
			{name}
		</button>
	);
};
