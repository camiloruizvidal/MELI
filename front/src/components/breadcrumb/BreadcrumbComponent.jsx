import React from 'react'
import './breadcrumbs.scss'

const BreadcrumbComponent = () => {

    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                <li class="breadcrumb-item"><a href="#">Categoría</a></li>
                <li class="breadcrumb-item active">Página actual</li>
            </ol>
        </nav>
    )

}

export default BreadcrumbComponent;