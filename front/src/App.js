import './App.css';
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';
import Search from './view/search/Search';
import Product from './view/product/Product';
import NavbarComponent from './components/navbar/NavbarComponent';

function App() {
	return (
		<div className="App">
			<NavbarComponent />
			<main className='main'>
				<BrowserRouter>
					<Routes>
						<Route path='/productos/:query' element={<Search />} />
						<Route path='/producto/:id' element={<Product />} />
					</Routes>
				</BrowserRouter>
			</main>
		</div>
	);
}

export default App;
