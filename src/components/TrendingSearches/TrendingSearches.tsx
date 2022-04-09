import { useEffect, useState } from 'react';
import { getTrendingTerms } from '../../services';
import { Category } from '../Category';

const TrendingSearches = () => {
	const [trends, setTrends] = useState<string[]>([]);

	useEffect(() => {
		getTrendingTerms().then(trends => setTrends(trends));
	}, []);

	return (
		<Category name='Tendencias' options={trends}/>
	);
};

export default TrendingSearches;
