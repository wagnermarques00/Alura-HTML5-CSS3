const Header = () => {
	return (
		<header className="flex justify-between items-center h-20 px-5 bg-gray-500 sm:rounded-xl sm:m-5">
			<span className="text-gray-100">Olá, usuário</span>
			<h1 className="text-gray-100 text-xl">Alura Newsletter</h1>
			<input className="hidden sm:block" type="checkbox" />
		</header>
	);
};

export default Header;
