import React, { Component } from 'react'
import './HomeUser.css';
import { BrowserRouter as Router} from "react-router-dom";
import BannerSlider from '../../component/slider/controlledCarousel';
import NavBarUser from '../../component/navigationBarUser/navbarku';
import ProgramCategory from '../../component/programCategory/ProgramCategory';
import FeaturedProgram  from '../../component/featuredProgram/FeaturedProgram';
import PenggalanganDanaBerlangsung from '../../component/PDBerlangsung/PenggalanganDanaBerlangsung';
import News from '../news/News';
import Footer from '../../component/footer/Footer';
// import Register from '../register/Register';

export default class HomeUser extends Component{
  render(){
    return (
        <Router>
            <NavBarUser />
            <BannerSlider />
            <ProgramCategory />
            <FeaturedProgram />
            <PenggalanganDanaBerlangsung />
            <News />
            <Footer />
        </Router>
    );
  }
}

