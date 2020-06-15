import React, { Component } from 'react'
import './Home.css';
import { BrowserRouter as Router} from "react-router-dom";
import ControlledCarouselku from '../../component/slider/controlledCarousel';
// import DonateCategory from '../../component/home/DonateCategory/DonateCategory';
import Navbarku from '../../component/navigationBar/navbarku';
import BannerSlider from '../../component/slider/controlledCarousel';
import NavBar from '../../component/navigationBar/navbarku';
import ProgramCategory from '../../component/programCategory/ProgramCategory';
import FeaturedProgram  from '../../component/featuredProgram/FeaturedProgram';
import PenggalanganDanaBerlangsung from '../../component/PDBerlangsung/PenggalanganDanaBerlangsung';
import News from '../../pages/news/News';
import Footer from '../../component/footer/Footer';

export default class Home extends Component{
  // constructor(props){
  //   super(props);
  //   this.state ={
  //     history: this.props.history
  //   }
  // }

  render(){
    return (
      // <Router history={history}>
      <Router>
            <Navbarku />
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
