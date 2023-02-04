import Input from "../Input/Input";

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
			<Input type="text" required placeholder="Insira seu nome..." />
			<Input type="email" required placeholder="Insira seu e-mail..." />
			<button
				className="rounded-full py-1 px-5 w-full max-w-sm text-gray-200 uppercase outline-none hover:animate-pulse hover:shadow-md hover:shadow-gray-500 bg-alura-100  dark:bg-dark-200 hover:dark-shadow-black "
				type="submit"
			>
				Seguir
			</button>
		</form>
	);
};

export default Form;
