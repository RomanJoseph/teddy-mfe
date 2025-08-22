import { StyledInput } from "./styles";

interface Props {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

function Input({ value, onChange, placeholder }: Props) {
	return (
		<StyledInput
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
		/>
	);
}

export default Input;
