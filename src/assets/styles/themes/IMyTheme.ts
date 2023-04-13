type IMyColors = {
	background: string;
	back: string;
	primary: {
		light: string;
		main: string;
		dark: string;
	};
	green: {
		light: string;
		main: string;
	};
	danger: {
		light: string;
		main: string;
		dark: string;
	};
	gray: {
		main: string;
		dark: string;
	};
};

type IMyTheme = {
	colors: IMyColors;
};

export default IMyTheme;
