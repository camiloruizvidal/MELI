import { Row } from 'react-bootstrap';
import './App.scss';
import BreadcrumbComponent from './components/breadcrumb/BreadcrumbComponent';
import NavbarComponent from './components/navbar/NavbarComponent';
import { RouterIndex } from './routes/RouterIndex';

function App() {
	return (
		<div className="App">
			<NavbarComponent />
			<main className='main'>
				<div className='row'>
					<BreadcrumbComponent />
					<div className="container-fluid">
						<Row>
							<div className="ui-search-main">
								<section className="content-data">
									<RouterIndex />
								</section>
							</div>
						</Row>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
