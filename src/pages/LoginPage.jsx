import { useForm } from "react-hook-form";
import Button from "../components/Button";
import TextField from "../components/TextField";
import "../sass/pages/login-page.scss";
import { useState } from "react";
import { useEffect } from "react";
import { login, userAuthenticated } from "../services/authService";
import { Redirect } from "wouter";

export default function LoginPage() {
	const { handleSubmit, register } = useForm();
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

	const onSubmit = (data) => {
		login(data)
			.then((user) => {
				setUser(user);
			})
			.catch(() => {
				setUser(null);
			});
	};

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (user) {
		return <Redirect to="/" />;
	}

	return (
		<section className="login-page--cover">
			<form className="login-page--form" onSubmit={handleSubmit(onSubmit)}>
				<header className="login-page--form__header">
					<span className="login-page--form--header__line_vertical"> </span>
					<h1 className="login-page--form--header__title">Crud operations</h1>
				</header>
				<section className="login-page--form__subtitle">
					<h2 className="login-page--form--subtitle__title">Sign in</h2>
					<h3 className="login-page--form--subtitle__description">
						Enter your credentials to access your account
					</h3>
				</section>
				<section className="login-page--form__inputs">
					<TextField
						label="Email"
						name="email"
						placeholder="Enter your email"
						{...register("email")}
					/>
					<TextField
						label="Password"
						name="password"
						type="password"
						placeholder="Enter your password"
						{...register("password")}
					/>

					<Button>Sign in</Button>
				</section>
				<footer className="login-page--form__footer">
					<p className="login-page--form--footer__text">
						Forgot your password?
						<a href="#reset">Reset Password</a>
					</p>
				</footer>
			</form>
		</section>
	);
}
