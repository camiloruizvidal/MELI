import React, { useState } from 'react'
import './search.scss'

const SearchImputComponent = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        console.log(event)
        setSearchTerm(event.target.value);
    }

    const searchProduct = (event) => {
        if((event.type === "keydown" && event.code === 'Enter') || event.type === 'click') {
            window.location.href = '/productos/' + searchTerm;
        }
    }
    

    return (
        <div>
            <input
                type="text"
                className="nav-search-input"
                placeholder='Nunca dejes de buscar'
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={searchProduct}
            />
            <button type="button" className="nav-search-btn" onClick={searchProduct}>
                <div role="img" aria-label="Buscar" className="nav-icon-search">
                </div>
            </button>
        </div>
    )
}

export default SearchImputComponent
