import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { LoginPageContainer } from "./styles";

function LoginPage() {
	const [name, setName] = useState("");

	return (
		<>
			<LoginPageContainer>
				<form>
					<Input
						id={5}
						placeholder={"Digite o seu nome: "}
						value={name}
						onChange={setName}
					/>
					<Button
						variant="primary"
						children={"Entrar"}
						onClick={() => alert("Clicou")}
					/>
				</form>
			</LoginPageContainer>
		</>
	);
}

export default LoginPage;
