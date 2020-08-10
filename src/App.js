import React from 'react';
import './App.css';
import MemeForm from './MemeForm';
import Memes from './Memes';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<MemeForm />
				<Memes />
			</header>
		</div>
	);
}

export default App;
