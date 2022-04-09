import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { GifsContext } from '../context/gif/GifsContext';
import { Gif } from '../components/gifs';

export const Detail = () => {
	const { id } = useParams<'id'>();

	const { gifs } = useContext(GifsContext);

	const gif = gifs.find(gif => gif.id === id);

	if (!gif) return (<></>);

	const { title, url } = gif;

	return (
		<Gif title={ title } url={ url } id={ id }/>
	);
};
