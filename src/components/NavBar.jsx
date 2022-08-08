import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NavBar(props) {
	const { loggedIn, handleLogout } = props;
	console.log(handleLogout);
	return (
		<Box sx={{ flexGrow: 1, marginBottom: '3rem' }}>
			<AppBar position="static">
				<Toolbar sx={{ backgroundColor: '#4250ae' }}>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, textAlign: 'left' }}
					>
						My Music App
					</Typography>
					{loggedIn ? (
						<Button color="inherit" onClick={handleLogout}>
							Logout
						</Button>
					) : (
						<Button color="inherit"></Button>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
