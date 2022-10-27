import { Container, Row } from 'react-bootstrap';
import './App.scss';
import BreadcrumbComponent from './components/breadcrumb/BreadcrumbComponent';
import NavbarComponent from './components/navbar/NavbarComponent';
import { RouterIndex } from './routes/RouterIndex';

function App() {
	return (
		<div className="App">
			<NavbarComponent />
			<main className='main'>
				<Row>
					<BreadcrumbComponent />
					<Container fluid>
						<Row>
							<div className="ui-search-main">
								<section className="content-data">
									<RouterIndex />
								</section>
							</div>
						</Row>
					</Container>
				</Row>
			</main>
		</div>
	);
}

export default App;
