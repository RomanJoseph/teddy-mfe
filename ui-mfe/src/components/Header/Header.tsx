import { HeaderContainer } from "./styles";
import menuIcon from "../../assets/images/icons/menu-icon.png";
import teddyLogo from "../../assets/images/teddy-logo.png";

interface Props {
	userName: string;
	options: {
		label: string;
		isSelected: boolean;
		onClick: () => void;
	}[];
}

function Header({ userName, options }: Props) {
	return (
		<HeaderContainer>
			<div className="header-left">
				<img src={menuIcon} className="menu-icon" alt="Manu" />
				<img src={teddyLogo} className="teddy-logo" alt="TeddyLogo" />
			</div>
			<div className="header-center">
				{options.map((option) => (
					<span
						key={option.label}
						className={option.isSelected ? "active" : ""}
						onClick={option.onClick}
					>
						{option.label}
					</span>
				))}
			</div>
			<div className="header-right">
				<span>
					Olá, <b>{userName}!</b>
				</span>
			</div>
		</HeaderContainer>
	);
}

export default Header;
