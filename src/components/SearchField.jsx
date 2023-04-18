import React from "react";
import "../sass/components/text-field.scss";

function SearchField({ name, label, type = "text", ...props }, ref) {
	return (
		<div className="text-field">
			<input type={type} name={name} {...props} ref={ref} />
		</div>
	);
}

export default React.forwardRef(SearchField);
