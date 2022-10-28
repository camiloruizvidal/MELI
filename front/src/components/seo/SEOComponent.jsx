import React, { useEffect, useState } from 'react'
import MetaTags from 'react-meta-tags';

export const SEOComponent = (props) => {

	const [serverDomain, setServerDomain] = useState({ url: '', domain: '' });

	useEffect(()=>{
		setServerDomain({
			url: window.location.href,
			domain: window.location.origin
		})
	}, [setServerDomain])

	return (
		<MetaTags>
			<title>{props.tags.title} | MercadoLibre 📦</title>
			<meta name="twitter:site" content="Mercado Libre" data-head-react="true" />
			<meta property="og:url" content={serverDomain.url} data-head-react="true" />
			<meta name="twitter:domain" content={serverDomain.domain} data-head-react="true" />
			<meta name="description" content={props.tags.description} data-head-react="true" />
			<meta name="twitter:description" content={props.tags.description} data-head-react="true" />
			<meta property="og:description" content={props.tags.description} data-head-react="true" />
			<meta name="title" content={props.tags.title} data-head-react="true" />
			<meta name="twitter:title" content={props.tags.title} data-head-react="true" />
			<meta property="og:title" content={props.tags.title} data-head-react="true" />
			{props.tags.image
			? <>
			<meta name="image" content={props.tags.image} data-head-react="true" />
			<meta name="twitter:image" content={props.tags.image} data-head-react="true" />
			<meta property="og:image" content={props.tags.image} data-head-react="true" />
			</>
			:<></>
			}

	  </MetaTags>
	)
}
