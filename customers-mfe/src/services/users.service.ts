import axios from "axios";
import type { User } from "../models/User";

const apiBaseUrl = "https://boasorte.teddybackoffice.com.br/users";

type CreateUserProps = Omit<User, "id" | "createdAt" | "updatedAt">;

export const createUsers = async (props: CreateUserProps): Promise<void> => {
	await axios.post(apiBaseUrl, props);
};

interface ListUserProps {
	page: number;
	limit: number;
}

interface ListUserResponse {
	clients: User[];
	totalPages: 4;
	currentPage: 1;
}

export const listUsers = async ({
	page,
	limit,
}: ListUserProps): Promise<ListUserResponse> => {
	const { data } = await axios.get<ListUserResponse>(
		`${apiBaseUrl}?page=${page}&limit=${limit}`
	);

	return data;
};
