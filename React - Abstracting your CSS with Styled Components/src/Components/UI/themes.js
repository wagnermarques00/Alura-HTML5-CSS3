import { contentLight, lightBackground, lightBackgroundText } from "./variables";
import { contentDark, darkBackground, darkBackgroundText } from "./variables";

export const lightTheme = {
	body: lightBackground,
	inside: contentLight,
	text: lightBackgroundText,
	filter: "",
};

export const darkTheme = {
	body: darkBackground,
	inside: contentDark,
	text: darkBackgroundText,
	filter: "invert(100%)",
};
