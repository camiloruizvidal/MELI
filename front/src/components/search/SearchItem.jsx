import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const SearchItem = (props) => {
  const {
    id,
    title,
    //condition,
    //free_shipping,
    picture,
    price
  } = props.data;
  return (
    <Card>
      <Card.Body>
        <Card.Text>
          <a href={"http://localhost:3000/producto/" + id}>
          <Col xs={2}>
            <img src={picture} />
          </Col>
          <Col xs={10}>
            <Card.Title>$ {price.amount}</Card.Title>
            <Card.Subtitle>
              {title}
            </Card.Subtitle>
          </Col>
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SearchItem
