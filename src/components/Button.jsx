import "../sass/components/button.scss";
import clsx from "clsx";

function Button({ children, variant = "primary", type, ...props }) {
	return (
		<button
			className={clsx({
				"btn-primary": variant === "primary",
				"btn-secondary": variant === "secondary",
			})}
			type={type}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
