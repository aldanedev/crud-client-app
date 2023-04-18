import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
	name: "client",
	initialState: [],
	reducers: {
		fetchClients: (state, action) => {},
		setClients: (state, action) => {
			return action.payload;
		},
		addClient: (state, action) => {
			state.push({ id: 0, ...action.payload });
		},
		addIdToClient: (state, action) => {
			state.filter((client) => client.id !== 0).push(action.payload);
		},
		deleteClientById: (state, action) => {
			return state.filter((client) => client.id !== action.payload);
		},
	},
});

export default clientSlice.reducer;

export const {
	fetchClients,
	setClients,
	addClient,
	addIdToClient,
	deleteClientById,
} = clientSlice.actions;
