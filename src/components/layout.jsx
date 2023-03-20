import {Container} from '@mui/material';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '../components/app-bar';
import DebugPanel from '../components/debug-panel';
import NavigationList from '../components/navigation-list';

function Layout({children}) {
	const [isDebugOpen, setIsDebugOpen] = useState(false);
	const [isNavigationOpen, setIsNavigationOpen] = useState(false);

	const toggleDebugDrawer = () => {
		setIsDebugOpen(!isDebugOpen);
	};

	const toggleNavigationDrawer = () => {
		console.log('toggler no toggling');
		setIsNavigationOpen(!isNavigationOpen);
	};

	return (
		<Container sx={{textAlign: 'center', mx: 'auto'}}>
			<AppBar
				toggleDebugDrawer={toggleDebugDrawer}
				toggleNavigationDrawer={toggleNavigationDrawer}
			/>
			<NavigationList
				isOpen={isNavigationOpen}
				onClickAway={() => {
					setIsNavigationOpen(false);
				}}
			/>
			{children}
			<DebugPanel isOpen={isDebugOpen} />
		</Container>
	);
}

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
