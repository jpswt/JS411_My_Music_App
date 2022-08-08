export function User(props) {
	const { userName } = props;
	console.log(userName);
	if (userName) {
		return <h1>Welcome {userName}!</h1>;
	} else {
		return <h1>Welcome User!</h1>;
	}
}
