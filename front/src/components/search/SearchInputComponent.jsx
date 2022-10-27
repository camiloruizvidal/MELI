import React, { useState } from 'react'
import './searchComponent.scss'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchInputComponent = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const searchProduct = (event) => {
        if ((
            (event.type === "keydown" && event.code === 'Enter')
            || event.type === 'click')
            && searchTerm.length > 0
        ) {
            window.location.href = '/items?search=' + searchTerm;
        }
    }


    return (
        <div className="col-md-10">
            <InputGroup>
                <Form.Control
                    placeholder='Nunca dejes de buscar'
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyDown={searchProduct}
                />
                <Button onClick={searchProduct} className="button-search">
                </Button>
            </InputGroup>
        </div>
    )
}

export default SearchInputComponent
