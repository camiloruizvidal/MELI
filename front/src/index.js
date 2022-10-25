import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Search from './view/search/Search';
import Product from './view/product/Product';
import NavbarComponent from './components/navbar/NavbarComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NavbarComponent />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/productos/:query' element={<Search />} />
        <Route path='/producto/:id' element={<Product />} />
        <Route path="*">
          Esta página no existe
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
