import { configureStore } from "@reduxjs/toolkit";

import clientReducer, { setClients, addIdToClient } from "./clients/slice";
import {
	getClientsService,
	createClientService,
	deleteClientByIdService,
} from "../services/clientService";

const syncWithDataMiddleware = (store) => (next) => (action) => {
	console.log(action.type);
	next(action);
	if (action.type === "client/fetchClients") {
		getClientsService().then((data) => {
			store.dispatch(setClients(data));
		});
	}

	if (action.type === "client/addClient") {
		createClientService(action.payload).then((data) => {
			store.dispatch(addIdToClient(data));
		});
	}

	if (action.type === "client/deleteClientById") {
		deleteClientByIdService(action.payload);
	}
};

export const store = configureStore({
	reducer: {
		clients: clientReducer,
	},
	middleware: [syncWithDataMiddleware],
});
