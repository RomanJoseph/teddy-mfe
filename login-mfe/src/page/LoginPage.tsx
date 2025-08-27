import { useState } from "react";
import { LoginPageContainer } from "./styles";
import React from "react";
import { useUserStore } from "store/userStore";

//@ts-expect-error
const Input = React.lazy(() => import("ui/Input"));
//@ts-expect-error
const Button = React.lazy(() => import("ui/Button"));

function LoginPage() {
	const [name, setName] = useState("");
	const { setUserName } = useUserStore();

	return (
		<>
			<LoginPageContainer>
				<p>Olá, seja bem vindo!</p>
				<Input
					className="login-input"
					placeholder={"Digite o seu nome: "}
					value={name}
					//@ts-expect-error
					onChange={(e) => setName(e.target.value)}
				/>
				<Button
					className="login-button"
					variant="primary"
					children={"Entrar"}
					onClick={() => setUserName(name)}
				/>
			</LoginPageContainer>
		</>
	);
}

export default LoginPage;
