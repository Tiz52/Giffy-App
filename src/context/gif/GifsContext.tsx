import { createContext } from 'react';
import { IGif } from '../../interfaces';

interface ContextProps {
	gifs: IGif[];

	setGifs: (gifs: IGif[]) => void;
}

export const GifsContext = createContext({} as ContextProps);