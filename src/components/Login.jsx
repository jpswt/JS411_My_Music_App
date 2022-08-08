import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login(props) {
	const { handleLogin, handleChange } = props;

	return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': {
					m: 1,
					width: '25ch',
					display: 'flex',
					margin: 'auto',
				},
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				id="username"
				label="Username"
				name="userName"
				variant="standard"
				onChange={handleChange}
				required
			/>
			<TextField
				id="password"
				label="Password"
				name="password"
				variant="standard"
				onChange={handleChange}
				required
			/>
			<Button
				onClick={handleLogin}
				style={{
					backgroundColor: '#4250ae',
					marginTop: '2rem',
					width: '16rem',
				}}
				variant="contained"
			>
				Login
			</Button>
		</Box>
	);
}
