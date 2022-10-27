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
	} = props.data.item;

	const index = props.data.index

	return (
		<Card>
			<Card.Body>
				<Card.Text>
					<a href={"/items/" + id}  className='searchItem'>
						<Row>
							<Col className='product-image' xs={3}>
								<img src={picture} className="picture" alt={title}/>
							</Col>
							<Col className='product-detail' xs={7}>
								<span className='price'>
									$ {new Intl.NumberFormat("es-CO").format(price.amount)}
									{(index%2===0)
										?<img src="/images/ic_shipping.png" className='ic_shipping' alt={'compra de ' + title} />
										: <></>
									}
								</span>
								<span className='title'>{title}</span>
							</Col>
							<Col xs={2}>
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
