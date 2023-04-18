import axios from "axios";

export async function getClientsService() {
	const { data } = await axios.get("http://localhost:8000/api/clients");
	return data;
}

export async function createClientService(client) {
	const { data } = await axios.post(
		"http://localhost:8000/api/clients",
		client,
	);
	return data;
}

export async function deleteClientByIdService(id) {
	await axios.delete(`http://localhost:8000/api/clients/${id}`);
}
