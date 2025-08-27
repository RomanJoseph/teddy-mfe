import type { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: "primary" | "secondary";
	children: React.ReactNode;
}

function Button({ variant, children, ...rest }: Props) {
	return (
		<StyledButton variant={variant} {...rest}>
			{children}
		</StyledButton>
	);
}

export default Button;
