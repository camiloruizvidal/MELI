import React, { useState } from 'react'
import { searchItems } from '../../services/Items.services';
import { useLocation } from 'react-router-dom';
import SearchItemComponent from '../../components/search/SearchItemComponent';
import { useEffect } from 'react';
import Row from 'react-bootstrap/esm/Row';


const SearchView = () => {

	const search = useLocation().search;
	const query = new URLSearchParams(search).get("search");
	const [ list, setList ] = useState({ items: [] });

	useEffect(() => {

		searchItems(query)
		.then((response) => {
			setList(response.data)
		})
		.catch((error) => {
			console.error(error)
		});

	}, []);

	return (
		<div className='container-fluid'>
			<Row>
				<div className="col-md-12">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="#">Inicio</a></li>
							<li class="breadcrumb-item"><a href="#">Categoría</a></li>
							<li class="breadcrumb-item active">Página actual</li>
						</ol>
					</nav>
				</div>
			</Row>
			<Row>
				<div className="ui-search-main">
					<section className="ui-search-results">
						<ol>
							{list.items.map((item, index) => (
								<li key={index}>
									<SearchItemComponent data={item} />
								</li>
							))}
						</ol>
					</section>
				</div>
			</Row>
		</div>
	);
}

export default SearchView;