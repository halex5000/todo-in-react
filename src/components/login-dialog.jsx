import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
	Dialog,
	DialogActions,
	TextField,
	DialogTitle,
	DialogContent,
	Divider,
	Button,
} from '@mui/material';
import {useAppStore} from '../store/app';

export default function LoginDialog({isOpen, handleClose}) {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const login = useAppStore((state) => state.login);
	return (
		<Dialog fullScreen open={isOpen} onClose={handleClose}>
			<DialogTitle variant="h3">Who Goes There?</DialogTitle>
			<Divider />
			<DialogContent>
				<TextField
					fullWidth
					label="Username"
					aria-label="username"
					onChange={(event) => {
						setUsername(event.target.value);
					}}
				/>
				<TextField
					fullWidth
					label="Password"
					onChange={(event) => {
						setPassword(event.target.value);
					}}
				/>
			</DialogContent>
			<DialogActions>
				<Button
					fullWidth
					variant="contained"
					color="primary"
					onClick={() => {
						login({username, password});
						handleClose();
						setUsername();
						setPassword();
					}}
				>
					Login
				</Button>
			</DialogActions>
		</Dialog>
	);
}

LoginDialog.propTypes = {
	isOpen: PropTypes.bool,
	handleClose: PropTypes.func,
	login: PropTypes.func,
};
