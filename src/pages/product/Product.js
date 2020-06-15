import React, { Component } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import { Tab } from 'react-bootstrap';
//import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import oiReload from '../../assets/img/oi-reload.png';
import './Product.css'

export default class Product extends Component{
  render() {
    return(
      <div className="wrapper-utama">
      <Tabs defaultActiveKey="Deskripsi" id="uncontrolled-tab-example">
  <Tab eventKey="Deskripsi" title="Deskripsi">
    <div className="description-text">
      <p>Seblak adalah makanan Indonesia, umumnya adalah makanan khas dari Sunda, Jawa Barat yang bercita rasa gurih dan pedas yang terbuat dari kerupuk basah yang dimasak dengan sayuran dan sumber protein seperti telur, ayam, boga bahari atau olahan daging sapi, dimasak dengan bumbu tertentu. Seblak adalah makanan khas Bandung, Jawa Barat. Seblak kini menjadi makanan jajanan jalanan yang digemari berbagai kalangan masyarakat terutama di daerah Jawa Barat dan Jabodetabek. Seblak disajikan di rumah makan dan warung, serta dijajakan di gerobak pedagang keliling. Makanan yang bertekstur kenyal ini memiliki rasa yang pedas dan menyegarkan, serta memiliki beberapa variasi, baik rasa maupun bahan tambahan juga kemasan. </p>
    </div>
    <div variant="info" className="alert-button">
      <p className="proposal">
      Pengalokasian dana donasi secara lebih rinci dapat dilihat dengan mendownload proposal dibawah ini:
    </p>
  <Button className="download-button" variant="primary">Download Proposal</Button>{' '}
    </div>
      </Tab>
      <Tab className="tab-product" eventKey="Donasi" 
        title={
          <div className="tabs-wrapper">
            <div className="home-teks">Donasi</div>
            <p className="home-counter">123</p>
          </div>
          }>
          <div className="description-wrapper">
            <p className="donatur-name">Siti Aisyah</p>
            <p className="set-donation">5 hari yang lalu</p>
            <p className="amount">RP 1.000</p>
            </div>
            <div className="reload-donatur">
            <img
              className="icon-reload" src={oiReload} alt="reload">
            </img>
            <p>TAMPILKAN LEBIH</p>
            </div>
      </Tab>
    </Tabs>
    </div>
    )
  }

}


