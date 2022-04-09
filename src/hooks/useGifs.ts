import { useState, useEffect, useContext } from 'react';
import { GifsContext } from '../context';

import { getGifs } from '../services';

const INITIAL_STATE = 0;

export const useGifs = (keyword?: string) => {
	const [loading, setLoading] = useState(false);
	const [loadingNextPage, setLoadingNextPage] = useState(false);
	const [page, setPage] = useState(INITIAL_STATE);
	const { gifs, setGifs } = useContext(GifsContext);

	const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'null';

	useEffect(() => {
		setLoading(true);

		getGifs({ keyword: keywordToUse })
			.then(gifs => {
				setGifs(gifs);
				setLoading(false);
				localStorage.setItem('lastKeyword', keywordToUse);
			});
	}, [keywordToUse, setGifs]);

	useEffect(() => {
		if (page === INITIAL_STATE) return;

		setLoadingNextPage(true);

		getGifs({ keyword: keywordToUse, page })
			.then(nextGifs => {
				const newGifs = [...gifs, ...nextGifs];
				setGifs(newGifs);
				setLoadingNextPage(false);
				localStorage.setItem('lastKeyword', keywordToUse);
			});
	}, [keywordToUse, page, setGifs]);

	return { loading, loadingNextPage, gifs, setPage };
};
