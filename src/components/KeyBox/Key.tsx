import { cn } from "../../utils/tailwind";

export interface KeyProps extends React.HTMLAttributes<HTMLButtonElement> {
	id: string;
	owner: string | null;
	className?: string;
}

export const Key = ({ id, owner, className, ...props }: KeyProps) => {
	const isEnabled = !!owner; // Detect if there is a owner

	return (
		<button
			className={cn("key", isEnabled ? "key-enabled" : "key-disabled", className)} //TODO: Style button and its variations.
			{...props}>
			{id}
		</button>
	);
};
