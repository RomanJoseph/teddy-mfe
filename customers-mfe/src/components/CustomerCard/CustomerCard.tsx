import { CustomerCardContainer } from "./styles";

import addIcon from "../../assets/images/icons/plus-icon.png";
import pencilIcon from "../../assets/images/icons/pencil-icon.png";
import trashIcon from "../../assets/images/icons/trash-icon.png";

interface Props {
	name: string;
	income: number;
	company_income: number;
	actions: {
		onAdd: () => void;
		onEdit: () => void;
		onDelete: () => void;
	};
}

function CustomerCard({ name, income, company_income, actions }: Props) {
	return (
		<CustomerCardContainer>
			<h3>{name}</h3>
			<p>Salário: {income} </p>
			<p>Empresa: {company_income} </p>
			<div>
				<img src={addIcon} alt="Selecionar" onClick={actions.onAdd} />
				<img src={pencilIcon} alt="Editar" onClick={actions.onEdit} />
				<img src={trashIcon} alt="Apagar" onClick={actions.onDelete} />
			</div>
		</CustomerCardContainer>
	);
}

export default CustomerCard;
