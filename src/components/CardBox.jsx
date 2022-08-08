import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardBox(props) {
	const { title, message, componentUI } = props;
	return (
		<Box sx={{ minWidth: 275 }}>
			<Card variant="outlined" sx={{ minHeight: 200 }}>
				<CardContent>
					<Typography
						variant="h6"
						sx={{
							fontSize: 18,
							fontWeight: 'bold',
							textAlign: 'left',
						}}
						color="text.primary"
						gutterBottom
					>
						{title}
					</Typography>
					<Typography variant="h5" component="div"></Typography>
					<Typography
						sx={{ textAlign: 'left', lineHeight: 'normal' }}
						color="text.primary"
						gutterBottom
					>
						{message}
					</Typography>
				</CardContent>
				<CardActions sx={{ margin: 0 }}>{componentUI}</CardActions>
			</Card>
		</Box>
	);
}
