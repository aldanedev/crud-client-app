import React from "react";
import "../sass/components/text-field.scss";

function TextField({ name, label, type = "text", error, ...props }, ref) {
	return (
		<div className="text-field">
			<label htmlFor={name}>{label}</label>
			<input type={type} name={name} {...props} ref={ref} autoComplete="off" />
			<span className="text-field__error">{error}</span>
		</div>
	);
}

export default React.forwardRef(TextField);
