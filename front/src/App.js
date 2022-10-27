import './App.scss';
import NavbarComponent from './components/navbar/NavbarComponent';
import { RouterIndex } from './routes/RouterIndex';

function App() {
	return (
		<div className="App">
			<NavbarComponent />
			<main className='main'>
				<RouterIndex/>
			</main>
		</div>
	);
}

export default App;
