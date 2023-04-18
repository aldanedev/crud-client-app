import axios from "axios";

axios.defaults.withCredentials = true;

export async function login(credentials) {
	await axios.get("http://localhost:8000/sanctum/csrf-cookie");
	await axios.post("http://localhost:8000/login", credentials);
	const data = await axios.get("http://localhost:8000/api/user");

	return data;
}

export async function userAuthenticated() {
	await axios.get("http://localhost:8000/sanctum/csrf-cookie");
	const { data } = await axios.get("http://localhost:8000/api/user");
	return data;
}

export async function logout(credentials) {
	await axios.get("http://localhost:8000/sanctum/csrf-cookie");
	await axios.post("http://localhost:8000/logout");

	return data;
}
