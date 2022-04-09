import { IGif, IGifsFromApi } from '../interfaces';
import { API_KEY } from './';

interface props {
	keyword?: string;
	limit?: number;
	page?: number;
}

const fromApiResponseToGifs = (apiResponse: IGifsFromApi): IGif[] => {
	const { data = [] } = apiResponse;

	if (Array.isArray(data)) {
		const gifs = data.map(gif => {
			const { images, title, id } = gif;
			const { url } = images.downsized_medium;
			return { url, title, id };
		});
		return gifs;
	}
	return [];
};

export const getGifs = ({ limit = 25, keyword = 'morty', page = 0 }:props): Promise<IGif[]> => {
	const apiURL = `https://api.giphy.com/v1/gifs/search?
	api_key=${API_KEY}&q=${keyword}&limit=${limit}&
	offset=${page * limit}&rating=pg-13&lang=en`;

	return fetch(apiURL)
		.then(res => res.json())
		.then(fromApiResponseToGifs);
};
