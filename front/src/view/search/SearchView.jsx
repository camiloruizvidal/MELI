import './searchView.scss'
import React, { useState, useEffect } from 'react'
import { searchItems } from '../../services/Items.services';
import { useLocation } from 'react-router-dom';
import SearchItemComponent from '../../components/search/SearchItemComponent';
import { SEOComponent } from '../../components/seo/SEOComponent';


const SearchView = () => {

	const search = useLocation().search;
	const query = new URLSearchParams(search).get("search");

	const [list, setList] = useState({ items: [] });
	const [tags, setTags] = useState({title: '', description: ''});

	useEffect(() => {

		searchItems(query)
		.then((response) => {
			setList(response.data)
		})
		.catch((error) => {
			console.error(error)
		});

		setTags({
			title: query,
			description: `Envíos Gratis en el día ✓ Compre ${query} en cuotas`
							+' sin interés! Conozca nuestras increíbles ofertas y'
							+' promociones en millones de productos.'
		});

	}, [setList]);

	return (

		<>
		<SEOComponent tags={tags}/>
		<ol className='items-products'>
			{list.items.map((item, index) => (
				<li key={index}>
					<SearchItemComponent data={{item:item,index:index}} />
				</li>
			))}
		</ol>
		</>
	);
}

export default SearchView;