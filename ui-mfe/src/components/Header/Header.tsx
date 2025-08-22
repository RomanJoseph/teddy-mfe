import { HeaderContainer } from "./styles";
import menuIcon from "../../assets/images/icons/menu-icon.png";
import teddyLogo from "../../assets/images/teddy-logo.png";

function Header() {
	return (
		<HeaderContainer>
			<img src={menuIcon} className="logo react" alt="React logo" />
			<img src={teddyLogo} className="logo react" alt="React logo" />
		</HeaderContainer>
	);
}

export default Header;
