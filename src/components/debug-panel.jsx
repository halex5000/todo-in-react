import PropTypes from 'prop-types';
import React from 'react';
import {
	Card,
	Drawer,
	Typography,
	IconButton,
	Toolbar,
	Container,
	Divider,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material';
import {ExpandMore, ExpandLess} from '@mui/icons-material/';
import {useAppStore} from '../store/app';

function DebugPanel({isOpen, toggleDebugDrawer}) {
	const allState = useAppStore((state) => state.allState);
	const stateItems = allState();

	console.log(stateItems);

	return (
		<Drawer
			open={isOpen}
			anchor="bottom"
			sx={{width: 600, height: 500}}
			variant="temporary"
		>
			<Container>
				<Toolbar>
					<Typography variant="h5">
						Debug Panel
						<IconButton size="xsmall" sx={{ml: 5}} onClick={toggleDebugDrawer}>
							{isOpen ? <ExpandMore /> : <ExpandLess />}
						</IconButton>
					</Typography>
				</Toolbar>

				<Card>
					<Toolbar>Items in State</Toolbar>
					<Divider />
					{stateItems.map((item) => {
						return (
							<Accordion key={item.key}>
								<AccordionSummary>{item.key}</AccordionSummary>
								<AccordionDetails>{item.value}</AccordionDetails>
							</Accordion>
						);
					})}
				</Card>
			</Container>
		</Drawer>
	);
}

DebugPanel.propTypes = {
	isOpen: PropTypes.bool,
	toggleDebugDrawer: PropTypes.func,
};

export default DebugPanel;
