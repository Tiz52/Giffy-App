import { GifsState } from '.';
import { IGif } from '../../interfaces';

type GifsActionType = 
| { type: '[Gif] - SetGifs', payload: IGif[] }

export const gifsReducer = ( state: GifsState, action: GifsActionType ): GifsState => {

 switch (action.type) {
 case '[Gif] - SetGifs':
	return {
	 ...state,
	 gifs: action.payload
	};

 default:
	return state;
 }

};