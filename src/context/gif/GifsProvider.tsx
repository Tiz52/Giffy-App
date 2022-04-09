import { FC, useCallback, useReducer } from 'react';
import { GifsContext, gifsReducer  } from '.';
import { IGif } from '../../interfaces';

export interface GifsState {
	gifs: IGif[];
}

const GIF_INITIAL_STATE: GifsState = {
	gifs: [],
};

export const GifsProvider:FC = ({ children }) => {

 const [state, dispatch] = useReducer( gifsReducer , GIF_INITIAL_STATE);

 const setGifs = useCallback(( gifs: IGif[] ) => {
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