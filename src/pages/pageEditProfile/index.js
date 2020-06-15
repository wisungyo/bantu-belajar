import React, { Component } from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import ControlledCarouselku from '../../component/slider/controlledCarousel';
// import DonateCategory from '../../component/home/DonateCategory/DonateCategory';
import Navbarku from '../../component/navigationBarUser/navbarku';
import BannerSlider from '../../component/slider/controlledCarousel';
import NavBar from '../../component/navigationBar/navbarku';
import ProgramCategory from '../../component/programCategory/ProgramCategory';
import FeaturedProgram  from '../../component/featuredProgram/FeaturedProgram';
import PenggalanganDanaBerlangsung from '../../component/PDBerlangsung/PenggalanganDanaBerlangsung';
import News from '../../pages/news/News';
import Footer from '../../component/footer/Footer';
import EditProfile from 'component/editProfile';

export default class Home extends Component{

  render(){
    return (
      <Router>
            <Navbarku />
            <EditProfile />
            <Footer />
        </Router>
    );
  }
}
