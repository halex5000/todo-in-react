import * as React from 'react';
import MaterialAppBar from '@mui/material/AppBar';
import {Box, IconButton, Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function AppBar() {
	return (
		<Box sx={{flexGrow: 1}}>
			<MaterialAppBar position='fixed'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{mr: 2}}
					>
						<MenuIcon/>
					</IconButton>
				</Toolbar>
			</MaterialAppBar>
		</Box>
	);
}

export default AppBar;
