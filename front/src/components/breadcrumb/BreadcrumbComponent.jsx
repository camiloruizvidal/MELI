import React from 'react'
import './breadcrumbs.scss'
import { useState, useEffect } from 'react'

export const BreadcrumbComponent = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        setItems([
            { link: '#', name: 'Inicio' },
            { link: '#', name: 'Categoria' },
            { link: '#', name: 'Página actual' }
        ])
        console.log(items)
    }, [setItems])

    return (
        <div className="col-md-12">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">{
                    items.map((item, index) => {
                        <li className="breadcrumb-item" key={index}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    })
                }</ol>
            </nav>
        </div>
    )
}
