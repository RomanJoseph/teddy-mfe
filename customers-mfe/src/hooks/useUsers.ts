import { useCallback, useEffect, useState } from "react";
import type { User } from "../models/User";
import { listUsers } from "../services/users.service";

interface Props {
	page: number;
	limit: number;
}

export const useUsers = ({ page = 1, limit = 16 }: Props) => {
	const [users, setUsers] = useState<User[]>();
	const [loading, setLoading] = useState<boolean>(false);

	const fetchUsers = useCallback(async () => {
		try {
			setLoading(true);
			const { clients } = await listUsers({
				page,
				limit,
			});

			setUsers(clients);
		} catch {
			alert("Erro listando usuários !");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchUsers();
	}, [page, limit]);

	return {
		users,
		userRefresh: fetchUsers,
		usersLoading: loading,
	};
};
