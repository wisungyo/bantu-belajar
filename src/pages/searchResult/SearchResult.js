import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/productActions';
import PropTypes from 'prop-types';

import Tabs from 'react-bootstrap/Tabs';
import { Tab } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { Card, CardDeck } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form'
import Search1 from "../../assets/img/search-1.jpg"
import VerifiedIcon from '../../assets/img/verified-icon.png'
import Penggalangan from '../../assets/img/penggalangan-dana.png'
//import VektorClose from '../../assets/img/vektor-close.png'

import './searchResult.css'
import Organisation from './Organisation';

class SearchResult extends Component {
  
  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    const productItems = this.props.products.map(product => (
      <a href="/product-detail" style={{textDecoration: "none"}}>
      <Card className="card-wrapper">
        <Card.Img variant="" src={Search1} />
        <Card.Body>
          <div className="tag-penggalang-dana">
            <div className="tag-penggalang">{product.kategori}</div>
            <div className="tag-city-penggalang">{product.lokasi}</div>
          </div>
          <Card.Title className="product-title">{product.judul}</Card.Title>
            <div className="organization text-color-grey">
              {product.penggalang.nama}
              <img className="verified-icon" src={VerifiedIcon} alt="Verified Icon"></img>
            </div>           
          <div className="progress-info-wrapper">
            <div className="progress-bar-wrapper">
              <ProgressBar className="" now={product.dana_terkumpul / product.dana_target * 100} />
            </div>
            <div className="progress-text text-color-grey">&nbsp;{(product.dana_terkumpul / product.dana_target * 100).toFixed(0)}%</div>
          </div>
          <div className="info-fund">
            <div className="info-declare">Terkumpul</div>
            <div className="remaining-day">{
              Math.round(Math.abs((new Date(product.tgl_target) - new Date()) / (24*60*60*1000)))
            } hari lagi</div>
          </div>
          <div className="info-amount">Rp. {Number((product.dana_terkumpul).toFixed(2)).toLocaleString('de-DE')}</div>  
        </Card.Body>
      </Card>
      </a>
    ));

    return(
      <div className="product-main-container">
        <div className="left-panel">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} style={{backgroundColor: "#fff", border: "0"}} eventKey="0">
                Kategori
              </Accordion.Toggle>
              <Accordion.Collapse style={{fontWeight: "300"}} eventKey="0">
                <Card.Body>
                 <Form.Check
                    type="checkbox"
                    className="mb-2 mr-sm-2"
                    id="inlineFormCheck"
                    label="Kategori"
                  />
                  <Form.Check
                    type="checkbox"
                    className="mb-2 mr-sm-2"
                    id="inlineFormCheck"
                    label="Bnguanan"
                  />
                  <Form.Check
                    type="checkbox"
                    className="mb-2 mr-sm-2"
                    id="inlineFormCheck"
                    label="Koleksi"
                  />
                  <Form.Check
                    type="checkbox"
                    className="mb-2 mr-sm-2"
                    id="inlineFormCheck"
                    label="Program"
                  />
                  <Form.Check
                    type="checkbox"
                    className="mb-2 mr-sm-2"
                    id="inlineFormCheck"
                    label="Fasilitas"
                  />  
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} style={{backgroundColor: "#fff", border: "0"}} eventKey="0">
                Lokasi
              </Accordion.Toggle>
              <Accordion.Collapse style={{fontWeight: "300"}} eventKey="0">
                <Card.Body>
                  <Form.Check
                    type="checkbox"
                    className="mb-2 mr-sm-2"
                    id="inlineFormCheck"
                    label="Yogyakarta"
                  />
                  <Form.Check
                    type="checkbox"
                    className="mb-2 mr-sm-2"
                    id="inlineFormCheck"
                    label="Sleman"
                  />
                  <Form.Check
                    type="checkbox"
                    className="mb-2 mr-sm-2"
                    id="inlineFormCheck"
                    label="Bantul"
                  />
                  <Form.Check
                    type="checkbox"
                    className="mb-2 mr-sm-2"
                    id="inlineFormCheck"
                    label="Kulon Progo"
                  />
                  <Form.Check
                    type="checkbox"
                    className="mb-2 mr-sm-2"
                    id="inlineFormCheck"
                    label="Gunung Kidul"
                  />
                  <Form.Check
                    type="checkbox"
                    className="mb-2 mr-sm-2"
                    id="inlineFormCheck"
                    label="Magelang"
                  />
                  <Form.Check
                    type="checkbox"
                    className="mb-2 mr-sm-2"
                    id="inlineFormCheck"
                    label="Temanggung"
                  />
                  <Form.Check
                    type="checkbox"
                    className="mb-2 mr-sm-2"
                    id="inlineFormCheck"
                    label="Wonosobo"
                  />
                  <Form.Check
                    type="checkbox"
                    className="mb-2 mr-sm-2"
                    id="inlineFormCheck"
                    label="Kebumen"
                  />
                  <Form.Check
                    type="checkbox"
                    className="mb-2 mr-sm-2"
                    id="inlineFormCheck"
                    label="Purworejo"
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Button className="button-bottom" variant="primary" type="button">Terapkan Filter</Button>
        </div>
      
        <div className="right-panel">
          <Tabs defaultActiveKey="dana" id="uncontrolled-tab-example">
            <Tab eventKey="dana" title={
              <div className="galangan-dana">
                {/* <img
                  className="" src={Penggalangan} alt="penggalangandana">
                </img> */}
                <div> &nbsp; Penggalangan Dana</div>
              </div>
            }>
              <div className="merche-heading">
                <div className="text-result">Menampilkan 10+ hasil pencarian "perpus"</div>
                <div className="set-button">
                  <p className="sort-here grey-font-color">Urutkan</p>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic grey-font-color">
                      Relevansi &nbsp;&nbsp;&nbsp;
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className="grey-font-color" href="#/action-1">Relevansi</Dropdown.Item>
                      <Dropdown.Item className="grey-font-color" href="#/action-2">Mendekati Deadline</Dropdown.Item>
                      <Dropdown.Item className="grey-font-color" href="#/action-3">Sedikit Terkumpul</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="tag-ging"> 
                <a className="tag-text" href="/">koleksi</a>
              </div>
              <div className="">
                <CardDeck className="main-ropper">
                  { productItems }
                </CardDeck>
              </div>
            </Tab>
            <Tab eventKey="organisasi" title={
              <div className="galangan-dana">
                {/* <img
                  className="" src={Penggalangan} alt="penggalangandana">
                </img> */}
                <div> &nbsp; Organisasi</div>
              </div>
            }>

            <Organisation />

            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

SearchResult.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  products: state.products.products
})

export default connect(
  mapStateToProps, 
  { fetchProducts }
)(SearchResult);