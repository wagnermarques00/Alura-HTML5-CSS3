import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = () => {
	return (
		<header className="flex justify-between items-center h-20 px-5 bg-alura-200 dark:bg-dark-200 sm:rounded-xl sm:m-5">
			<span className="text-gray-100">Olá, usuário</span>
			<h1 className="text-gray-100 text-xl">Alura Newsletter</h1>
			<ToggleTheme />
		</header>
	);
};

export default Header;
