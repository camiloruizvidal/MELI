import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { searchItems } from '../../services/Items.services';
import { useLocation } from 'react-router-dom';
import SearchItemComponent from '../../components/search/SearchItemComponent';


const SearchView = () => {

	const search = useLocation(). search;
	const query = new URLSearchParams(search).get("search");
	const [ list, setList ] = useState({ items: [] });

	useEffect(() => {
		searchItems(query)
		.then((response) => {

			setList(response.data)
		})
		.catch((error) => {

			console.log(error)
		});
	}, [ setList ]);

	return (
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
	);
}

export default SearchView;