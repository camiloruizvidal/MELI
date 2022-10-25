import React, { useState } from 'react'
import './search.scss'

const SearchImputComponent = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const searchProduct = () => {

        window.location.href = '/productos/' + searchTerm;
    }

    return (
        <div>
            <input
                type="text"
                className="nav-search-input"
                value={searchTerm}
                onChange={handleChange}
            />
            <button type="button" className="nav-search-btn" onClick={searchProduct}>
                <div role="img" aria-label="Buscar" className="nav-icon-search">
                </div>
            </button>
        </div>
    )
}

export default SearchImputComponent
