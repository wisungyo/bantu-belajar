import React, { Component } from 'react';
// import { Router } from 'react-router-dom';

import Navbarku from '../../component/navigationBarUser/navbarku';
import SearchResult from '../searchResult/SearchResult';
import Footer from '../../component/footer/Footer';

export default class Home extends Component{

  render(){
    return (
      <div>
        <Navbarku />
        <SearchResult />
        <Footer />
      </div>
    );
  }
}
