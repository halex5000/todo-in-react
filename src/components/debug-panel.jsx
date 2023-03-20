import PropTypes from 'prop-types';
import React from 'react';
import {Drawer} from '@mui/material';

function DebugPanel({isOpen}) {
	return <Drawer open={isOpen} />;
}

DebugPanel.propTypes = {
	isOpen: PropTypes.bool,
};

export default DebugPanel;
