import { HeaderContainer } from "./styles";
import menuIcon from "../../assets/images/icons/menu-icon.png";
import teddyLogo from "../../assets/images/teddy-logo.png";

interface Props {
	userName: string;
	currentPath: string;
	onCustomerClick: () => void;
	onSelectedCustomerClick: () => void;
}

function Header({
	userName,
	currentPath,
	onCustomerClick,
	onSelectedCustomerClick,
}: Props) {
	return (
		<HeaderContainer>
			<div className="header-left">
				<img src={menuIcon} className="menu-icon" alt="Manu" />
				<img src={teddyLogo} className="teddy-logo" alt="TeddyLogo" />
			</div>
			<div className="header-center">
				<span
					className={currentPath === "/customers" ? "active" : ""}
					onClick={onCustomerClick}
				>
					Clientes
				</span>
				<span
					className={currentPath === "/selected-customers" ? "active" : ""}
					onClick={onSelectedCustomerClick}
				>
					Clientes selecionados
				</span>
				<span>Sair</span>
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
