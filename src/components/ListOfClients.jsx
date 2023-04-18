import { useEffect } from "react";
import { useClientActions } from "../hooks/useClientActions";
import { useAppSelector } from "../hooks/store";
import Button from "./Button";
import "../sass/components/list-of-clients.scss";
import { EditPencil, Trash } from "iconoir-react";

export function ListOfClients({ onNewClient }) {
	const { getClients, onDeleteClientById } = useClientActions();
	const clients = useAppSelector((state) => state.clients);

	useEffect(() => {
		getClients();
	}, []);
	return (
		<section className="list-client">
			<header className="header">
				<h1 className="header--title">Client List</h1>
				<p>
					<Button type="button" onClick={() => onNewClient(true)}>
						Add New Client
					</Button>
				</p>
			</header>
			<ul>
				{clients.map((client) => (
					<li className="item" key={client.id}>
						<img
							width={64}
							height={64}
							alt="Avatar"
							src={`https://robohash.org/${client.id}.png`}
						/>
						<span>{client.name}</span>
						<span>{client.email}</span>
						<span>{client.phone}</span>
						<span>{client.enrollment}</span>
						<span>{client.date_payment}</span>
						<div>
							<button onClick={() => onDeleteClientById(client.id)}>
								<Trash />
							</button>
							<button onClick={() => onDeleteClientById(client.id)}>
								<EditPencil />
							</button>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
