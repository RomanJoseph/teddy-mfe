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
//@ts-expect-error
const Header = React.lazy(() => import("ui/Header"));
//@ts-expect-error
const LoginPage = React.lazy(() => import("login/LoginPage"));

function App() {
	return (
		<BrowserRouter>
			<MainApp />
		</BrowserRouter>
	);
}

import { useUserStore } from "store/userStore";

function MainApp() {
	const { userName } = useUserStore();

	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div className="App">
			<Suspense fallback={<div>Carregando...</div>}>
				{userName ? (
					<Header
						userName={userName}
						currentPath={location.pathname}
						onCustomerClick={() => navigate("/customers")}
						onSelectedCustomerClick={() => navigate("/selected-customers")}
					/>
				) : (
					<LoginPage />
				)}
				<Routes>
					<Route path="/customers" element={<></>} />
					<Route path="/selected-customer" element={<></>} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
