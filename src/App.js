import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [state, setState] = useState({ userName: '', password: '' });

	const handleChange = (e) => {
		const value = e.target.value;
		setState({ ...state, [e.target.name]: value });
	};

	const handleLogin = (e) => {
		setLoggedIn(!loggedIn);
	};

	const handleLogout = (e) => {
		setLoggedIn(false);
		setState({ userName: '', password: '' });
	};

	return loggedIn ? (
		<div>
			<NavBar loggedIn={loggedIn} handleLogout={handleLogout} />
			<Dashboard
				userName={state.userName}
				password={state.password}
				loggedIn={loggedIn}
				handleLogout={handleLogout}
			/>
		</div>
	) : (
		<div className="App">
			<NavBar />
			<Login handleLogin={handleLogin} handleChange={handleChange} />
		</div>
	);
}

export default App;
