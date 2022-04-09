import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { GifsContext } from '../context/gif/GifsContext';
import { Gif } from '../components';

export const Detail = () => {
	const { id } = useParams<'id'>();

	const { gifs } = useContext(GifsContext);

	const { title, url } = gifs.find(gif => gif.id === id)!;

	return (
		<Gif title={ title } url={ url } id={ id }/>
	);
};
