import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';

const data = [
	{
		image: 'image.com',
		name: 'chapter 1',
		id: 1,
		season: 1
	},
	{
		image: 'image.com',
		name: 'chapter 2',
		id: 2,
		season: 1
	},
	{
		image: 'image.com',
		name: 'chapter 3',
		id: 3,
		season: 1
	}
];

test('Componenet Render ', () => {
	render(<Episodes episodes={data} />);
});

test('Renders props from app.js and updates as state changes', () => {

	const { rerender } = render(<Episodes episodes={[]} />);


	const imgBefore = screen.queryByRole('img');

	
	expect(imgBefore).toBeNull();


	rerender(<Episodes episodes={data} />);

	
    const imgAfter = screen.queryAllByRole('img');
    
	expect(imgAfter).not.toBeNull();
	expect(imgAfter).toBeTruthy();
});