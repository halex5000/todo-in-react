import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {useAppStore} from './store/app';
import HomeBase from './views/home-base';

function App() {
	const theme = useAppStore(state => state.theme);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<HomeBase/>
		</ThemeProvider>
	);
}

export default App;
