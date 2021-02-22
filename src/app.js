import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalstyles';
import Hero from './components/hero/hero';
import Products from './components/products/products';
import { productData, productDataTwo } from './components/products/data';
import Feature from './components/feature/feature';
import Footer from './components/footer/footer';
 

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favorite' data={productData}/>
      <Feature/>
      <Products heading='Choose your Deserts' data={productDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;
