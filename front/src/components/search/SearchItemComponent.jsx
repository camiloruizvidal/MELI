import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const SearchItemComponent = (props) => {
	const {
		id,
		title,
		condition,
		picture,
		price
	} = props.data;

	return (
		<Card>
			<Card.Body>
				<Card.Text>
					<a href={"http://localhost:3000/items/" + id}  className='searchItem'>
						<Row>
							<Col xs={3}>
								<img src={picture} className="picture" />
							</Col>
							<Col xs={6}>
								<span className='price'>$ {new Intl.NumberFormat().format(price.amount)}</span>
								<h2>{title}</h2>
							</Col>
							<Col xs={3}>
								<span className='condition'>{ condition === 'new' ? 'Nuevo' : 'Usado' }</span>
							</Col>
						</Row>
					</a>
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default SearchItemComponent
