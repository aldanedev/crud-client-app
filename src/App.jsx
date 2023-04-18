import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "wouter";
import { RequireAuth } from "./components/RequireAuth";
import "./sass/base/main.scss";

function App() {
	return (
		<main className="main">
			<Switch>
				<Route path="/login" component={LoginPage} />
				<Route path="/">
					<RequireAuth>
						<HomePage />
					</RequireAuth>
				</Route>
				<Route>404, Not found</Route>
			</Switch>
		</main>
	);
}

export default App;
