import "../sass/components/menu.scss";
import {
	HomeAlt,
	BookmarkEmpty,
	GraduationCap,
	MoneySquare,
	StatsReport,
	Settings,
	LogOut,
} from "iconoir-react";
import clsx from "clsx";
import { logout } from "../services/authService";
import useLocation from "wouter/use-location";

export default function Menu({ open }) {
	const [location, setLocation] = useLocation();
	return (
		<menu
			className={clsx("menu", {
				"menu--hide": !open,
				"menu--open": open,
			})}
		>
			<h1>CRUD OPERATIONS</h1>
			<picture>
				<div className="menu__avatar">
					<img alt="Avatar" src="https://robohash.org/5.png" />
				</div>
			</picture>
			<h2>Kathi Madesh</h2>
			<p>Admin</p>
			<nav>
				<ul>
					<li>
						<HomeAlt />
						<span>Home</span>
					</li>
					<li>
						<BookmarkEmpty />
						<span>Course</span>
					</li>
					<li className="active">
						<GraduationCap />
						<span>Clients</span>
					</li>
					<li>
						<MoneySquare />
						<span>Payments</span>
					</li>
					<li>
						<StatsReport />
						<span>Reports</span>
					</li>
					<li>
						<Settings />
						<span>Settings</span>
					</li>
				</ul>
			</nav>
			<button
				className="logout"
				type="button"
				onClick={() => {
					logout();
					setLocation("/login");
				}}
			>
				<span>Logout</span>
				<LogOut />
			</button>
		</menu>
	);
}
