import { useEffect } from "react";
import { userAuthenticated } from "../services/authService";
import { useState } from "react";
import { Redirect } from "wouter";

export function RequireAuth({ children }) {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		userAuthenticated()
			.then((user) => {
				setUser(user);
				setIsLoading(false);
			})
			.catch(() => {
				setUser(null);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (!user && !isLoading) {
		return <Redirect to="/login" />;
	}

	return children;
}
