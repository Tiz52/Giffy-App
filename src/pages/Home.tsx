import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { LazyTrending } from '../components/TrendingSearches';
import { ListOfGifs } from '../components';
import { SearchForm } from '../components/SearchForm';
import { useGifs } from '../hooks';

export const Home = () => {
	const navigate = useNavigate();
	const { gifs } = useGifs();

	const handleSubmit = useCallback(({ keyword }: { keyword: string }) => {
		if (keyword.length === 0) return;

		navigate(`/search/${keyword}`);
	}, [navigate]);

	return (
		<>
			<SearchForm onSubmit ={ handleSubmit } />
			<div className='App-main'>
				<div className='App-results'>
					<h3 className='App-title'>Última búsqueda</h3>
					<ListOfGifs gifs={ gifs }/>
				</div>
				<div className='App-category'>
					<LazyTrending/>
				</div>
			</div>
		</>
	);
};
