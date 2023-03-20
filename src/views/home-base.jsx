import {Box, Container, Grid, Typography, useTheme} from '@mui/material';
import React from 'react';
import Image from 'mui-image';
import {isMobile} from 'react-device-detect';
import darkModeLogo from '../assets/dark-mode-logo.png';
import lightModeLogo from '../assets/light-mode-logo.png';
import {useAppStore} from '../store/app';
import LinkCarousel from '../components/link-carousel';

function HomeBase() {
	const theme = useTheme();
	const user = useAppStore((state) => state.user);

	return (
		<Container sx={{textAlign: 'center', mx: 'auto'}}>
			<Image
				sx={{
					mt: 20,
				}}
				height={isMobile ? 100 : 250}
				fit="contain"
				src={theme.palette.mode === 'dark' ? darkModeLogo : lightModeLogo}
			/>
			<br />

			<Typography variant="body2" sx={{mt: 8}}>
				Welcome to
			</Typography>

			<Typography variant="h2" className="heroText">
				Dark Launching with React
			</Typography>

			<Box sx={{py: 2}} />

			<Typography variant="h4" sx={{mb: 'n1'}}>
				{user?.username}
			</Typography>

			<Box sx={{py: 4}} />

			<Grid container spacing={2}>
				<Grid item xs={2} />
				<Grid item xs={8}>
					<LinkCarousel />
				</Grid>
			</Grid>
		</Container>
	);
}

export default HomeBase;
