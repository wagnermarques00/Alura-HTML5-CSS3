const Form = ({ onSubmit }) => {
	const safeSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();

		const name = event.target[0].value;
		const email = event.target[1].value;

		onSubmit({ name, email });
	};

	return (
		<form className="flex flex-col gap-10 items-center justify-center h-full -mt-20 mx-5" onSubmit={safeSubmit}>
			<input className="alura-input" type="text" required placeholder="Insira seu nome..." />
			<input className="alura-input" type="email" required placeholder="Insira seu e-mail..." />
			<button className="alura-button " type="submit">
				Seguir
			</button>
		</form>
	);
};

export default Form;
