import React from "react";
import CustomerCard from "../components/CustomerCard/CustomerCard";
import { useUsers } from "../hooks/useUsers";
import { CustomersPageContainer } from "./styles";

//@ts-expect-error
const Button = React.lazy(() => import("ui/Button"));

function CustomersPage() {
	const { users, usersLoading } = useUsers({
		page: 1,
		limit: 16,
	});

	const handleAddCustomer = () => {
		alert("Adicionar");
	};

	const handleEditCustomer = () => {
		alert("Editar");
	};

	const handleDeleteCustomer = () => {
		alert("Deletar");
	};

	if (usersLoading) {
		return <p> Carregando... </p>;
	}

	return (
		<>
			<CustomersPageContainer>
				{users?.map((u) => (
					<CustomerCard
						name={u.name}
						company_income={u.companyValuation}
						income={u.salary}
						actions={{
							onAdd: handleAddCustomer,
							onEdit: handleEditCustomer,
							onDelete: handleDeleteCustomer,
						}}
					/>
				))}
				<Button variant="primary" children="Criar cliente" />
			</CustomersPageContainer>
		</>
	);
}

export default CustomersPage;
