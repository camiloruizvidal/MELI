import './searchView.scss'
import React, { useState, useEffect } from 'react'
import { searchItems } from '../../services/Items.services';
import { useLocation } from 'react-router-dom';
import SearchItemComponent from '../../components/search/SearchItemComponent';


const SearchView = () => {

	const search = useLocation().search;
	const query = new URLSearchParams(search).get("search");
	const [list, setList] = useState({ items: [] });

	useEffect(() => {

		searchItems(query)
			.then((response) => {
				setList(response.data)
			})
			.catch((error) => {
				console.error(error)
			});

	}, [setList]);

	return (

		<ol className='items-products'>
			{list.items.map((item, index) => (
				<li key={index}>
					<SearchItemComponent data={{item:item,index:index}} />
				</li>
			))}
		</ol>
	);
}

export default SearchView;