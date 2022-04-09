import React, { Suspense } from 'react';
import { useNearScreen } from '../../hooks';
import { Spinner } from '../gifs';

const TrendingSearches = React.lazy(
	() => import('./TrendingSearches')
);

export const LazyTrending = () => {
	const { isNearScreen, fromRef } = useNearScreen();

	return <div ref={fromRef}>
		<Suspense fallback={<Spinner />}>
			{isNearScreen ? <TrendingSearches /> : <Spinner />}
		</Suspense>
	</div>;
};
