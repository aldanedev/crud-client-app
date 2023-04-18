import { useAppDispatch } from "./store";
import {
	addClient,
	deleteClientById,
	fetchClients,
} from "../store/clients/slice";

export const useClientActions = () => {
	const dispatch = useAppDispatch();
	const getClients = (users) => dispatch(fetchClients(users));
	const onAddClient = (client) => dispatch(addClient(client));
	const onDeleteClientById = (id) => dispatch(deleteClientById(id));

	return { getClients, onAddClient, onDeleteClientById };
};
