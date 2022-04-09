import { useRef, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import debounce from 'just-debounce-it';

import { ListOfGifs, Spinner } from '../components';
import { useGifs, useNearScreen } from '../hooks';

export const SearchResults = () => {
	const { keyword } = useParams<'keyword'>();
	const { gifs, loading, setPage } = useGifs(keyword);
	const externalRef = useRef<HTMLDivElement>(null);
	const { isNearScreen } = useNearScreen({
		externalRef: loading ? null : externalRef,
		once: false
	});

	const debounceHandleNextPage = useCallback(debounce(
		() => setPage(prevPage => prevPage + 1), 200
	), [setPage]);

	useEffect(() => {
		if (isNearScreen) {
			debounceHandleNextPage();
		}
	}, [isNearScreen, debounceHandleNextPage]);

	return (
		<>
			{
				loading
					? <Spinner/>
					: <>
						<h3 className='App-title'>{decodeURI(keyword!)}</h3>
						<ListOfGifs gifs={ gifs } />
						<div id='visor' ref={ externalRef }></div>
					</>
			}
			<br/>
		</>
	);
};
