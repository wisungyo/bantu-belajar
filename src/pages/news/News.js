import React, { useState, Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import News1 from '../../assets/img/news1.png'
import NewsCard1 from '../../assets/img/news-card1.png'
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { viewHotNews } from "../../actions/newsActions";
import { Nav } from 'react-bootstrap';
import './style-news.css';

class News extends Component {

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  componentWillMount() {
    this.props.viewHotNews();
  }

  show = () => {
    console.log("hieeeeek");
  }

  render(){

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // console.log("aaa");
    console.log(this.props.news.news);

    return(
      <div id="news" className="News-main-wrapper">
        <div className="News-title-wrapper">
          <div>
            <h1>KABAR LITERASI INDONESIA</h1>
            <p>Aktivitas Bantu Belajar untuk terus meningkatkan literasi 
              keseluruhan masyarakat di penjuru Indonesia.</p>
          </div>
          <div>
            <Nav.Link className="Home-News-link" href="/news">Lihat lebih banyak</Nav.Link>
          </div>
        </div>
        {/* <Carousel className="News-carousel-wrapper" activeIndex={index} onSelect={handleSelect} > */}
        <Carousel className="News-carousel-wrapper">
          
          {this.props.news.news.map((data, index) =>
            (index < 3) ?
              <Carousel.Item className="News-card-wrapper">
                    <img
                      className="d-block w-100"
                      src={data.gambar.gambar_1._meta.secure_url}
                      alt="First slide"
                      height="503px"
                    />
              </Carousel.Item>
              : ""
          )}
        </Carousel>

        <div className="News-card-wrapper">
          {this.props.news.news.map((data, index) =>
            (index > 2  && index < 7) ?
              <Card className="News-card-news">
                <Link to="/" style={{ textDecoration: 'none' }} onClick={this.show}>
                  <img className="News-list-img" variant="top" src={data.gambar.gambar_1._meta.secure_url} />
                  <Card.Body className="News-card-body-wrapper">
                    {/* <Card.Title className="News-card-title" >{data.judul}</Card.Title> */}
                    <p className="News-card-title">{data.judul}</p>
                    <div className="News-info-source-wrapper">
                      <div className="News-info-source">{data.sumber}</div>
                      <div className="info-date News-align-right">{new Date(data.tgl_terbit).toLocaleDateString(['ban','id'], options)}</div>
                    </div>
                  </Card.Body>
                </Link>
              </Card>
              : 
              ""
          )}

        </div>
      </div>
    )
  }
}

News.propTypes = {
  viewFeaturedProgram: PropTypes.func.isRequired,
  news: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  news: state.news
})

export default connect(
  mapStateToProps,
  { viewHotNews }
)(News);

