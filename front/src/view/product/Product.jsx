import './product.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { getItem } from '../../services/Items.services';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Product = () => {
    const [item, setItem] = useState({id: null,title: null, picture: null, price: { amount: 0}});
    const { id } = useParams();

    useEffect(() => {
        getItem(id).then((response) => {

            response.data.item.price.amount = new Intl.NumberFormat().format(response.data.item.price.amount)
            setItem(response.data.item);
            document.title = 'MELI - ' + item.title

        })
        .catch((error) => {
            console.log(error)
        });
    }, [setItem]);

    return (
        <div>
            <Card>
                <Card.Body>
                    <Row>
                        <Col xs={9}>
                            <img src={item.picture} />
                        </Col>
                        <Col xs={3} className="title">
                            <div className='condition'>
                                {item.condition == 'new' ? 'Nuevo' : 'Usado' }
                                -
                                {item.sold_quantity} vendidos
                            </div>
                            <div className='name'>{item.title}</div>
                            <span className='price'>
                                $ {item.price.amount}
                            </span>
                            <div className="d-grid mt-5">
                                <Button size="lg" variant="primary">Comprar</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <h2>Descripción del producto</h2>
                        <p>{item.description}</p>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
  }

export default Product