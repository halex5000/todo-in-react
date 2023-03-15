import React from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Audimat3000 from '../src/assets/fonts/Audimat3000-Regulier.woff2';
import SohneBuch from '../src/assets/fonts/Sohne-Buch.woff2';
import SohneKraftig from '../src/assets/fonts/Sohne-Kraftig.woff2';
import HomeBase from './views/home-base';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#405BFF',
		},
		secondary: {
			main: '#EBFF38',
		},
		neutral: {
			main: '#64748B',
		},
	},
	typography: {
		h2: {
			fontFamily: 'Audimat',
		},
		h5: {
			fontFamily: 'Kraftig',
		},
		h6: {
			fontFamily: 'Kraftig',
			fontWeight: 'bold',
			fontSize: '24px',
		},
		body1: {
			fontFamily: 'Buch',
			color: '#e6e6e6',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				@font-face {
					font-family: "Audimat";
					src: url(${Audimat3000}) format('woff2');
					font-weight: bold;
				}

				@font-face {
					font-family: 'Kraftig';
					src: url(${SohneKraftig}) format('woff2');
				}

				@font-face {
					font-family: 'Buch';
					src: local('Buch'), url(${SohneBuch}) format('woff2');
					font-weight: normal;
				}
			`,
		},
	},
});

// Const lightTheme = {
// 	...darkTheme,
// 	palette: {
// 		mode: 'light',
// 		primary: {
// 			main: '#405BFF',

// 		},
// 		secondary: {
// 			main: '#3DD6F5',
// 		},
// 	},
// };

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline/>
			<HomeBase/>
		</ThemeProvider>
	);
}

export default App;
