import React from 'react';

const NotificationCard = (props) => {
	const { index, notification } = props;

	return (
		<div>
			<li key={index}>{notification}</li>
		</div>
	);
};

export default NotificationCard;
