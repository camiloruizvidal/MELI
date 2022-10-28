import './productView.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { getItem } from '../../services/Items.services';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { SEOComponent } from '../../components/seo/SEOComponent';

const ProductView = () => {

    const [item, setItem] = useState({ id: null, title: '', picture: null, price: { amount: 0 } });
	const [tags, setTags] = useState({ title: '', description: '', image: '' });

    const { id } = useParams();

    useEffect(() => {

        getItem(id).then((response) => {

            response.data.item.price.amount = new Intl.NumberFormat("es-CO")
                                                .format(response.data.item.price.amount)

            setTags({
                title: response.data.item.title,
                description: response.data.item.description,
                image: response.data.item.picture
            })

            setItem(response.data.item);

        })
        .catch((error) => {
            console.error(error)
        });

    }, [setItem]);

    return (

        <Card>
            <Card.Body>
    		    <SEOComponent tags={tags}/>
                <Row>
                    <Col xs={9}>
                        <img className='imageProduct' src={item.picture} alt={item.title} />
                    </Col>
                    <Col xs={3} className="title">
                        <div className='product-condition'>
                            {item.condition === 'new' ? 'Nuevo' : 'Usado'}
                            -
                            {item.sold_quantity} vendidos
                        </div>
                        <div className='product-name'>{item.title}</div>
                        <div className='product-price'>
                            $ {item.price.amount}
                        </div>
                        <div className="d-grid">
                            <Button size="lg" className='btn-buy' variant="primary">Comprar</Button>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <span className='description-title'>Descripción del producto</span>
                    <div className='description-product'>{item.description}</div>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ProductView