import { FC } from 'react';

import { Gif } from '..';
import { IGif } from '../../interfaces';

import './styles.css';

interface props {
	gifs: IGif[];
}

export const ListOfGifs: FC<props> = ({ gifs }) => {
	return (
		<div className='ListOfGifs'>
			{ gifs.map(({ id, title, url }) => (
				<Gif key={ url } title={ title } url={ url } id={ id } />
			))}
		</div>
	);
};
