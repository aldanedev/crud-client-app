import { ArrowLeftCircle, ArrowRightCircle } from "iconoir-react";
import "../sass/components/search.scss";
import SearchField from "./SearchField";
import { useState } from "react";

export default function Search({ onToggleMenu }) {
	const [toggleMenu, setToggleMenu] = useState(true);
	return (
		<div className="search">
			<button
				onClick={() => {
					onToggleMenu(!toggleMenu);
					setToggleMenu(!toggleMenu);
				}}
			>
				{toggleMenu ? <ArrowLeftCircle /> : <ArrowRightCircle />}
			</button>
			<div>
				<SearchField type="search" placeholder="Search" />
			</div>
		</div>
	);
}
