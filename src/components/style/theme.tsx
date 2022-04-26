export const theme = {
	breakPoint: {
		mobile: 576,
		tablet: 768,
		laptop: 992,
	},
	fontsize: {
		xs: 10,
		s: 13,
		m: 16,
		xm: 18,
		l: 23,
		xl: 48,
	},
	color: {
		background: '#ffffff',
		light: '#cfcfcf',
		link: '#e5e5e5',
		basic: '#505050',
	},
	space: {
		xs: 5,
		s: 10,
		m: 20,
		xm: 25,
		l: 50,
		xl: 70,
	},
	lineHeight: {
		s: 100,
		m: 180,
		l: 200,
	},
};

export type ThemeType = typeof theme;
