import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meme from './Meme';
import './Memes.css';

const Memes = () => {
	const memes = useSelector((state) => state.memes);
	const dispatch = useDispatch();

	const handleRemove = (e) => {
		const id = e.target.parentElement.id;
		dispatch({ type: 'REMOVE_MEME', id });
	};

	return (
		<div className="Memes">
			{memes.map((meme) => (
				<Meme
					key={meme.id}
					id={meme.id}
					url={meme.url}
					top={meme.top}
					bottom={meme.bottom}
					handleRemove={handleRemove}
				/>
			))}
		</div>
	);
};

export default Memes;
