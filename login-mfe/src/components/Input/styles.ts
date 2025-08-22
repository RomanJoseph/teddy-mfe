import styled from "styled-components";

export const StyledInput = styled.input`
	padding: 16px 20px;
	cursor: pointer;
	font-size: 16px;
	font-weight: bold;
	width: 100%;
	border-radius: 4px;
	border: 2px solid #a5a4a4ff;
	background-color: transparent;

	&::placeholder {
		color: #d9d9d9;
	}

	&:hover {
		opacity: 0.8;
	}
`;
