import styled from "styled-components";

export const CustomersPageContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
	padding: 30px;
	box-sizing: border-box;

	margin-top: 100px;

	width: 90vw;

	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
		padding: 30px 60px;
	}

	@media (max-width: 718px) {
		grid-template-columns: 1fr;
		padding: 20px 30px;
		width: 70vw;
	}
`;
