import { FC, useCallback, useReducer, useEffect } from 'react';
import { GifsContext, gifsReducer } from '.';
import { IGif } from '../../interfaces';

export interface GifsState {
	gifs: IGif[];
}

const GIF_INITIAL_STATE: GifsState = {
	gifs: []
};

export const GifsProvider:FC = ({ children }) => {
	const [state, dispatch] = useReducer(gifsReducer, GIF_INITIAL_STATE);

	useEffect(() => {
		const gifs: IGif[] = JSON.parse(localStorage.getItem('gifs') || '');

		if (gifs) setGifs(gifs);
	}, []);

	const setGifs = useCallback((gifs: IGif[]) => {
		localStorage.setItem('gifs', JSON.stringify(gifs));

		dispatch({ type: '[Gif] - SetGifs', payload: gifs });
	}, []);

	return (
		<GifsContext.Provider value={{
			...state,
			setGifs
		}}>
			{ children }
		</GifsContext.Provider>
	);
};
