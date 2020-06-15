import React, { Component } from 'react';
// import { Router } from 'react-router-dom';

import Navbarku from '../../component/navigationBarUser/navbarku';
import ProductDetail from '../../component/product/ProductDetail/ProductDetail';
import DetailText from '../../component/product/ProductDetail/DetailText';
import Footer from '../../component/footer/Footer';

export default class Home extends Component{

  render(){
    return (
      <div>
        <Navbarku />
        <ProductDetail />
        <DetailText />
        <Footer />
      </div>
    );
  }
}