import styled from "styled-components";

export const HeaderContainer = styled.div`
	width: 100%;
	height: 100px;
	background-color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 50px;
	box-sizing: border-box;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;

	.header-left {
		display: flex;
		align-items: center;
		gap: 46px;

		.teddy-logo {
			height: 50px;
		}

		.menu-icon {
			cursor: pointer;
			height: 24px;
		}
	}

	.header-center {
		display: flex;
		align-items: center;
		gap: 33px;
		font-size: 16px;
		color: #000000;
	}

	.header-right {
		span {
			font-size: 16px;
			color: #000000;
			cursor: pointer;
		}
	}
`;
