
import { Link, Route, Routes } from 'react-router-dom';

import { Home, SearchResults, Detail } from './pages';
import './App.css';

function App () {
	return (
		<div className="App">
			<section className='App-content'>
				<Link to='/'>
					<figure className="App-logo">
						<img alt='Giffy logo' src='/logo.png' />
					</figure>
				</Link>
				<Routes>
					<Route
						element={ <Home/> }
						path='/'
					/>
					<Route
						element={ <SearchResults/> }
						path='/search/:keyword'
					/>
					<Route
						element={ <Detail/> }
						path='/gif/:id'
					/>
				</Routes>
			</section>
		</div>
	);
}

export default App;
