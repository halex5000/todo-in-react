import React from 'react';
import Icon from '@mui/material/Icon';
import {Paper, Typography, Box, Divider, Button} from '@mui/material';
import {useFlags} from 'launchdarkly-react-client-sdk';
import Carousel from 'react-material-ui-carousel';

function LinkCarousel() {
	const {carouselItems} = useFlags();

	if (carouselItems) {
		return (
			<Box sx={{minHeight: 325, maxHeight: 300, maxWidth: 600, width: '100%', mx: 'auto'}}>
				<Carousel
					dots
					infinite
					autoPlay
					animation='slide'
					duration={250}
					interval={6000}
					slidesToShow={1}
					slidesToScroll={1}
				>
					{carouselItems.map(item => (

						<Paper key={item.title} sx={{textAlign: 'center'}}>

							<Box sx={{height: 112}}>
								<Icon color='primary' sx={{fontSize: 112, mb: 3}}>{item.icon.slice(4)}</Icon>
							</Box>

							<Typography variant='h5' sx={{mb: 3, pt: 1}}>{item.title}</Typography>

							<Box sx={{height: 50, mb: 3, pt: 2}}>
								<Typography>
									{ item.subtitle }
								</Typography>
							</Box>

							<Divider sx={{mb: 2}}/>
							<Box elevation={24} sx={{textAlign: 'right'}}>
								<Button color='neutral' sx={{minWidth: 164, border: 0.25, color: '#e6e6e6', mr: 2, mb: 2}} href={item.link} target='_blank' rel='noopener noreferrer'>{item.label}</Button>
							</Box>
						</Paper>
					))}
				</Carousel>
			</Box>
		);
	}

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<></>
	);
}

export default LinkCarousel;
