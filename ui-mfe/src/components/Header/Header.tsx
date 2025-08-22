import { HeaderContainer } from "./styles";
import menuIcon from "../../assets/images/icons/menu-icon.png";
import teddyLogo from "../../assets/images/teddy-logo.png";

function Header() {
	return (
		<HeaderContainer>
			<div className="header-left">
				<img src={menuIcon} className="menu-icon" alt="Manu" />
				<img src={teddyLogo} className="teddy-logo" alt="TeddyLogo" />
			</div>
			<div className="header-center">
				<span>Clientes</span>
				<span>Clientes selecionados</span>
				<span>Sair</span>
			</div>
			<div className="header-right">
				<span>
					Olá, <b>Usuário!</b>
				</span>
			</div>
		</HeaderContainer>
	);
}

export default Header;
