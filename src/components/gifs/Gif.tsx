import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

interface props {
	title: string;
	url: string;
	id?: string;
}

const Gif: FC<props> = ({ title, url, id }) => {
	return (
		<div className='Gif'>
			<Link to={`/gif/${id}`} className='Gif-link'>
				<h4>{ title }</h4>
				<img loading='lazy' src={ url } alt={ title } />
			</Link>
		</div>
	);
};

export default memo(Gif, (prevProps, nextProps) => {
	return prevProps.id === nextProps.id;
});
