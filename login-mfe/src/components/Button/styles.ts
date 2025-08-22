import styled from "styled-components";

export const StyledButton = styled.button<{ variant: string }>`
	background-color: ${({ variant }) =>
		variant === "primary" ? "#ff6c00" : "#cccccc"};
	color: ${({ variant }) => (variant === "primary" ? "#ffffff" : "#ff6c00")};
	padding: 15 0px;
	border: ${({ variant }) =>
		variant === "primary" ? "none" : "2px solid #ff6c00"};
	cursor: pointer;
	font-size: 16px;
	font-weight: bold;
	width: 100%;
	border-radius: 4px;

	&:hover {
		opacity: 0.8;
	}
`;
