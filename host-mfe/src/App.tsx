import React, { Suspense } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	useLocation,
	useNavigate,
} from "react-router-dom";
import "./App.css";
/* 
const CustomersPage = React.lazy(() => import("customers/CustomersPage"));
const SelectedCustomersPage = React.lazy(
	() => import("selected-customers/SelectedCustomersPage")
); */
const Header = React.lazy(() => import("ui/Header"));
const LoginPage = React.lazy(() => import("login/LoginPage"));
const CustomersPage = React.lazy(() => import("customers/CustomersPage"));

function App() {
	return (
		<BrowserRouter>
			<MainApp />
		</BrowserRouter>
	);
}

import { useUserStore } from "store/userStore";

function MainApp() {
	const { userName, setUserName } = useUserStore();

	const location = useLocation();
	const navigate = useNavigate();

	const headerOptions = [
		{
			label: "Clientes",
			isSelected: location.pathname === "/customers",
			onClick: () => navigate("/customers"),
		},
		{
			label: "Clientes selecionados",
			isSelected: location.pathname === "/selected-customers",
			onClick: () => navigate("/selected-customers"),
		},
		{
			label: "Sair",
			isSelected: false,
			onClick: () => setUserName(null),
		},
	];

	return (
		<div className="App">
			<Suspense fallback={<div>Carregando...</div>}>
				{userName ? (
					<Header userName={userName} options={headerOptions} />
				) : (
					<LoginPage />
				)}
				<Routes>
					<Route path="/customers" element={<CustomersPage />} />
					<Route path="/selected-customer" element={<></>} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
