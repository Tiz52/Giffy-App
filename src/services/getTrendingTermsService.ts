import { ITermsFromAPI } from '../interfaces';
import { API_KEY } from './';

const fromApiResponseToGifs = (apiResponse: ITermsFromAPI): string[] => {
	const { data = [] } = apiResponse;
	return data;
};

export const getTrendingTerms = (): Promise<string[]> => {
	const apiURL = `https://api.giphy.com/v1/trending/searches?
	api_key=${API_KEY}`;

	return fetch(apiURL)
		.then(res => res.json())
		.then(fromApiResponseToGifs);
};
