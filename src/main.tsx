import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { GifsProvider } from './context';

ReactDOM.render(
	<BrowserRouter>
		<GifsProvider>
		<App />
		</GifsProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
