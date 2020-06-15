import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';
import Img1 from '../../assets/img/featured1.jpg';
import VerifiedIcon from '../../assets/img/verified-icon.png';
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { viewFeaturedProgram } from "../../actions/programActions"
import './style-featured-program.css';
import { Link } from 'react-router-dom';

class FeaturedProgram extends Component {

  componentWillMount() {
    this.props.viewFeaturedProgram();
  }
  
  render(){
      return (
        <div className="fp-main-wrapper" id="featuredProgram">
          <h4>PENGGALANGAN DANA PILIHAN</h4>
          
          {/* <Carousel className="fp-carousel-wrapper" activeIndex={index} onSelect={handleSelect}> */}

          <Carousel className="fp-carousel-wrapper">
            <Carousel.Item className="fp-card-wrapper">
              {this.props.programs.programs.map((data, index) =>
                (index < 2) ?
                    <Card className="fp-card-featured">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <img className="fp-list-picture"  src={data.gambar.gambar_1._meta.secure_url} />
                        <Card.Body className="fp-card-body-wrapper">
                          <p className="fp-card-title">{data.judul}</p>
                          <div className="fp-card-subtitle-wrapper">
                            <div className="fp-organization fp-text-color-grey">
                              <p className="fp-penggalang-text">{data.penggalang.nama}</p>
                              <img className="fp-verified-icon" src={VerifiedIcon} alt="Verified Icon"></img>
                            </div>
                          <div >
                            <p className="fp-remaining-day">{Math.round(Math.abs((new Date(data.tgl_target) - new Date()) / (24 * 60 * 60 * 1000)))} hari lagi</p></div>
                          </div>
                          <div className="fp-progress-info-wrapper">
                            <div className="fp-progress-bar-wrapper">
                            <ProgressBar className="" now={(data.dana_terkumpul / data.dana_target * 100)} />
                            </div>
                          <div className="fp-progress-text fp-text-color-grey">{(data.dana_terkumpul / data.dana_target * 100).toFixed(0)}%</div>
                          </div>
                          <div className="fp-info-fund-wrapper">
                            <div className="fp-info-fund fp-text-color-grey">Terkumpul</div>
                            <div className="fp-info-fund fp-text-color-grey fp-align-right">Target</div>
                          </div>
                          <div className="fp-info-fund-wrapper">
                          <div className="fp-info-fund fp-text-regular">Rp. {Number((data.dana_terkumpul).toFixed(2)).toLocaleString('de-DE')}</div>
                          <div className="fp-info-fund fp-text-medium fp-align-right">Rp. {Number((data.dana_target).toFixed(2)).toLocaleString('de-DE')}</div>
                          </div>
                        </Card.Body>
                        </Link>
                      </Card>
                  : ""
              )}
            </Carousel.Item>
          
          </Carousel>
        </div>
      );
    }
}

FeaturedProgram.propTypes = {
  viewFeaturedProgram: PropTypes.func.isRequired,
  programs: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  programs: state.programs
})

export default connect(
  mapStateToProps,
  { viewFeaturedProgram }
)(FeaturedProgram);
