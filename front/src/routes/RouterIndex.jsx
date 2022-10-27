import React from 'react'
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';
import SearchView from     './../view/search/SearchView';
import ProductView from '../view/product/ProductView';

export const RouterIndex = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SearchView/>} />
            <Route path='/items' element={<SearchView/>} />
            <Route path='/items/:id' element={<ProductView />} />
        </Routes>
    </BrowserRouter>
  )
}
