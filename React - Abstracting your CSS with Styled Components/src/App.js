import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Header from "./Components/Header";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { darkTheme, lightTheme } from "./Components/UI/themes";
import { ThemeButton } from "./Components/UI";
import ThemeSwitcher from "./Components/ThemeSwitcher";

function App() {
	const [theme, setTheme] = useState(true);

	const themeToggle = () => {
		setTheme((theme) => !theme);
	};

	return (
		<ThemeProvider theme={theme ? darkTheme : lightTheme}>
			<GlobalStyle />
			<ThemeButton onClick={themeToggle}>
				<ThemeSwitcher theme={theme} />
			</ThemeButton>
			<Header />
			<Container />
		</ThemeProvider>
	);
}

export default App;
