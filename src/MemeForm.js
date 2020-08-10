import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

const MemeForm = () => {
	const dispatch = useDispatch();
	const INITIAL_VALUES = {
		url    : '',
		top    : '',
		bottom : ''
	};
	const [ values, setValues ] = useState(INITIAL_VALUES);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues((values) => ({
			...values,
			[name] : value
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { url, top, bottom } = values;
		const payload = { url, top, bottom, id: uuid() };
		dispatch({ type: 'ADD_MEME', payload });
		setValues(INITIAL_VALUES);
	};

	return (
		<div className="MemeForm">
			<h1>Make-A-Meme!</h1>
			<form onSubmit={handleSubmit}>
				<input
					id="url"
					name="url"
					type="url"
					value={values.url}
					onChange={handleChange}
					placeholder="Enter an image URL..."
					required
				/>
				<input
					id="top"
					name="top"
					type="text"
					value={values.top}
					onChange={handleChange}
					placeholder="Top text (optional)"
				/>
				<input
					id="bottom"
					name="bottom"
					type="text"
					value={values.bottom}
					onChange={handleChange}
					placeholder="Bottom text (optional)"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default MemeForm;
