import { useState } from "react";
import { ClientForm } from "../components/ClientForm";
import { ListOfClients } from "../components/ListOfClients";
import Menu from "../components/Menu";
import Search from "../components/Search";
import "../sass/pages/home-page.scss";
import clsx from "clsx";

export default function HomePage() {
	const [open, setOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(true);

	return (
		<section
			className={clsx("home", {
				"home--menu-hide": !menuOpen,
				"home--menu-open": menuOpen,
			})}
		>
			<Menu open={menuOpen} />
			<section>
				<Search onToggleMenu={setMenuOpen} />
				<ListOfClients onNewClient={setOpen} />
			</section>
			<ClientForm open={open} onClose={setOpen} />
		</section>
	);
}
