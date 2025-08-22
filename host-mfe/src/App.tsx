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

function App() {
	return (
		<BrowserRouter>
			<MainApp />
		</BrowserRouter>
	);
}

function MainApp() {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div className="App">
			<Suspense fallback={<div>Carregando...</div>}>
				<Header
					userName="Usuário Mockado"
					currentPath={location.pathname}
					onCustomerClick={() => navigate("/customers")}
					onSelectedCustomerClick={() => navigate("/selected-customers")}
				/>
				<Routes>
					<Route path="/customers" element={<></>} />
					<Route path="/selected-customer" element={<></>} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
