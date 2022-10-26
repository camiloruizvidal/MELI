import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { searchItems } from '../../services/Items.services';
import SearchItem from '../../components/search/SearchItem';


const Search = () => {

	const { query } = useParams();
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
							<SearchItem data={item} />
						</li>
					))}
				</ol>
			</section>
		</div>
	);
}

export default Search;