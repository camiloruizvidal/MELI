import React from 'react'
import './breadcrumbs.scss'

const BreadcrumbComponent = () => {

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Inicio</a></li>
                <li className="breadcrumb-item"><a href="#">Categoría</a></li>
                <li className="breadcrumb-item active">Página actual</li>
            </ol>
        </nav>
    )

}

export default BreadcrumbComponent;