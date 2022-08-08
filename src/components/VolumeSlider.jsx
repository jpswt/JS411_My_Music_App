import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function VolumeSlider(props) {
	const { volume, setVolume } = props;

	const handleSlider = (e) => {
		e.preventDefault();
		setVolume(e.target.value);
	};

	return (
		<Box width={300}>
			<Slider
				sx={{ width: '90%' }}
				size="small"
				value={volume}
				step={10}
				min={0}
				max={100}
				aria-label="Small"
				valueLabelDisplay="auto"
				onChange={handleSlider}
			/>
		</Box>
	);
}
