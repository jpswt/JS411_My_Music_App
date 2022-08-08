import React, { useEffect, useState } from 'react';
import CardBox from './CardBox';
import OnlineSwitch from './OnlineSwitch';
import VolumeSlider from './VolumeSlider';
import QualitySelector from './QualitySelector';
import NotificationCard from './Notifications';

import './Dashboard.css';
import { User } from './User';

const Dashboard = (props) => {
	const { userName } = props;
	const [online, setOnline] = useState(true);
	const [volume, setVolume] = useState(20);
	const [quality, setQuality] = useState(2);
	const [notifications, setNotifications] = useState([]);

	useEffect(() => {
		let notification = [];
		let onlineNotification = `Your application is offline. You won't be able to share or stream music to other devices.`;
		let volumeNotification = `Listening to music at a high volume could cause long-term hearing loss.`;
		let qualityNotification = `Music quality is degraded. Increase quality if your connection allows it.`;

		if (!online) {
			notification.push(onlineNotification);
		}
		if (volume > 80) {
			notification.push(volumeNotification);
		}
		if (quality === 1) {
			notification.push(qualityNotification);
		}
		setNotifications(notification);
	}, [online, volume, quality]);

	return (
		<div>
			<div className="main">
				<User userName={userName} />
				<section>
					<CardBox
						title="Online mode"
						message="Is this application connected to the internet?"
						componentUI={<OnlineSwitch online={online} setOnline={setOnline} />}
					/>
					<CardBox
						title="Master Volume"
						message="Overrides all other sound settings in this application"
						componentUI={<VolumeSlider volume={volume} setVolume={setVolume} />}
					/>
					<CardBox
						title="Sound Quality"
						message="Manually control the music quality in event of poor connection"
						componentUI={
							<QualitySelector quality={quality} setQuality={setQuality} />
						}
					/>
				</section>
				<h2>System Notifications:</h2>
				<ul>
					{notifications.map((notification, index) => (
						<NotificationCard key={index} notification={notification} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
