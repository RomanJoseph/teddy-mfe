import { StyledButton } from "./styles";

interface Props {
	onClick: () => void;
	variant: "primary" | "secondary";
	children: React.ReactNode;
}

function Button({ onClick, variant, children }: Props) {
	return (
		<StyledButton onClick={onClick} variant={variant}>
			{children}
		</StyledButton>
	);
}

export default Button;
