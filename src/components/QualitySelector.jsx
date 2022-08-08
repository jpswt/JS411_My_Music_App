import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function QualitySelector(props) {
	const { quality, setQuality } = props;

	const handleQuality = (e) => {
		setQuality(e.target.value);
	};

	return (
		<Box sx={{ m: 1, minWidth: 240, margin: '0 8px' }}>
			<FormControl variant="standard" fullWidth>
				<InputLabel id="demo-simple-select-label"></InputLabel>
				<Select
					labelId=""
					id="demo-simple-select"
					value={quality}
					label="Quality"
					onChange={handleQuality}
				>
					<MenuItem value={1}>Low</MenuItem>
					<MenuItem value={2}>Normal</MenuItem>
					<MenuItem value={3}>High</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
