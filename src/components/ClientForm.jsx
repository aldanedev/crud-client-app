import { Dialog } from "@headlessui/react";
import TextField from "./TextField";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { useClientActions } from "../hooks/useClientActions";
import "../sass/components/dialog.scss";

export function ClientForm({ open, onClose }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { onAddClient } = useClientActions();

	const onSubmit = (data) => {
		onAddClient(data);
		onClose(false);
	};

	return (
		<Dialog open={open} onClose={() => onClose(false)} className="dialog">
			<div className="dialog__overlay" aria-hidden="true" />
			<div className="dialog__container">
				<Dialog.Panel className="dialog__content">
					<form onSubmit={handleSubmit(onSubmit)} className="form_client">
						<h1 className="form_client__title">Nuevo Cliente</h1>
						<TextField
							label="Name"
							name="name"
							{...register("name", { required: "This field is required" })}
							error={errors.name?.message}
						/>
						<TextField
							label="Email"
							name="email"
							{...register("email", { required: "This field is required" })}
							error={errors.email?.message}
						/>
						<TextField
							label="Phone"
							name="phone"
							{...register("phone", { required: "This field is required" })}
							error={errors.phone?.message}
						/>
						<TextField
							label="Enrollment"
							name="enrollment"
							{...register("enrollment", {
								required: "This field is required",
							})}
							error={errors.enrollment?.message}
						/>
						<TextField
							label="Date payment"
							name="date_payment"
							type="date"
							{...register("date_payment", {
								required: "This field is required",
								pattern: /\d{4}-\d{2}-\d{2}/,
							})}
							error={errors.date_payment?.message}
						/>
						<div className="form-client__buttons">
							<Button
								type="button"
								variant="secondary"
								onClick={() => onClose(false)}
							>
								Cancel
							</Button>
							<Button type="submit">Save</Button>
						</div>
					</form>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
}
