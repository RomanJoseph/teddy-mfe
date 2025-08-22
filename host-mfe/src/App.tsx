import React, { Suspense } from "react";
import "./App.css";

const RemoteCounter = React.lazy(() => import("customers/CustomersPage"));
const Header = React.lazy(() => import("ui/Header"));

function App() {
	return (
		<div className="App" style={{ border: "2px solid blue", padding: "1rem" }}>
			<header className="App-header">
				<h1>Aplicação Host</h1>
				<p>
					Abaixo, carregamos um componente de outro projeto (microfrontend).
				</p>
			</header>

			<Suspense fallback={<div>Carregando componente do MFE 1...</div>}>
				<Header />
			</Suspense>
		</div>
	);
}

export default App;
