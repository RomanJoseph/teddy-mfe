import type { InputHTMLAttributes } from "react";
import { StyledInput } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	value: string;
}

function Input({ value, ...rest }: Props) {
	return <StyledInput value={value} {...rest} />;
}

export default Input;
