import React from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import HomeIcon from '@mui/icons-material/Home';
import AccountBox from '@mui/icons-material/AccountBox';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ClipboardList from '@mui/icons-material/List';
import Bug from '@mui/icons-material/BugReport';
import {
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import {Link} from 'react-router-dom';
import {useAppStore} from '../store/app';

function AccountIcon({user}) {
	if (user) {
		return (
			<ListItem>
				<ListItemButton>
					<ListItemIcon>
						<AccountCircle />
					</ListItemIcon>
					<ListItemText>Logged in as username</ListItemText>
				</ListItemButton>
			</ListItem>
		);
	}

	return (
		<ListItem>
			<ListItemButton>
				<ListItemIcon>
					<AccountBox />
				</ListItemIcon>
				<ListItemText>Login</ListItemText>
			</ListItemButton>
		</ListItem>
	);
}

AccountIcon.propTypes = {
	user: PropTypes.object,
};

function NavigationList({isOpen, onClickAway}) {
	const user = useAppStore((state) => state.user);
	return (
		<Drawer open={isOpen} variant="temporary" sx={{flexShrink: 0}}>
			<ClickAwayListener
				onClickAway={() => {
					console.log('something is happening');
					onClickAway();
				}}
			>
				<List>
					<AccountIcon user={user} />
					<Divider />
					<ListItem>
						<ListItemButton component={Link} href="/">
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary="Home" />
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton component={Link} href="/todo-list">
							<ListItemIcon>
								<ClipboardList />
							</ListItemIcon>
							<ListItemText primary="ToDo List" />
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<Bug />
							</ListItemIcon>
							<ListItemText primary="Dev Tools" />
						</ListItemButton>
					</ListItem>
				</List>
			</ClickAwayListener>
		</Drawer>
	);
}

NavigationList.propTypes = {
	isOpen: PropTypes.bool,
	onClickAway: PropTypes.func,
};

export default NavigationList;
