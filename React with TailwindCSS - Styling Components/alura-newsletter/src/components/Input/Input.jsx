const Input = (props) => {
	return (
		<input
			className="rounded-full outline-none w-full max-w-lg py-1 pl-5 text-dark-100 placeholder:text-gray-400 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200  invalid:border-2 invalid:border-red-400 invalid:focus:border-2 dark:bg-dark-200 dark:text-gray-200 placeholder:dark:text-gray-600 focus:dark:border-alura-100 invalid:dark:border-red-400 invalid:dark:focus:border-2"
			type="text"
			{...props}
		/>
	);
};

export default Input;
