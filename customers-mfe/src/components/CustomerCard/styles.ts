import styled from "styled-components";

export const CustomerCardContainer = styled.div`
	padding: 15px;
	background: #ffffff;
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: space-between;

	h3 {
		font-size: 16px;
		font-weight: bold;
		color: black;
	}

	p {
		color: black;
		font-size: 14px;
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		img {
			width: 16px;
			height: 16px;
			object-fit: contain;
			cursor: pointer;

			&:hover {
				opacity: 0.7;
			}
		}
	}

	@media (max-width: 768px) {
		padding: 12px;
		gap: 8px;

		h3 {
			font-size: 14px;
		}

		p {
			font-size: 12px;
		}

		img {
			width: 14px;
			height: 14px;
		}
	}

	@media (max-width: 576px) {
		padding: 10px;
		gap: 6px;

		h3 {
			font-size: 13px;
		}

		p {
			font-size: 11px;
		}

		img {
			width: 12px;
			height: 12px;
		}
	}
`;
