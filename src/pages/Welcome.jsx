import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
	const navigate = useNavigate();
	return (
		<div style={{ textAlign: 'center', marginTop: '10vh' }}>
			<h1>Welcome!</h1>
			<p>Get ready to start your quest.</p>
			<button onClick={() => navigate('/gamemap')} style={{ padding: '1em 2em', fontSize: '1.2em' }}>
				Go to Game Map
			</button>
		</div>
	);
}
