import React from 'react';
import './Meme.css';

const Meme = ({ id, url, top, bottom, handleRemove }) => {
	const handleMouseEnter = (e) => {
		const meme = document.getElementById(id);
		meme.children[1].style = 'display: inline;';
	};
	const handleMouseLeave = (e) => {
		const meme = document.getElementById(id);
		meme.children[1].style = 'display: none;';
	};

	return (
		<div
			id={id}
			className="Meme"
			style={{ backgroundImage: `url(${url})` }}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<p>{top}</p>
			<div className="Meme-Remove" style={{ display: 'none' }} onClick={handleRemove}>
				Click here to Remove
			</div>
			<p>{bottom}</p>
		</div>
	);
};

export default Meme;
