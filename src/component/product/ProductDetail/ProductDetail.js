import React, { Component } from 'react';
import './ProductDetail.css'
import { ProgressBar } from 'react-bootstrap';

export default class ProductDetail extends Component {
  render(){
    return (
      <div className="Product-section">
        <div className="Product-img">
          <div>
            <img src={require('../../../assets/img/Product1.png')} />
          </div>
          <div className="Product-image-bottom">
            <div className="Pict1">
              <img className="image" src={require('../../../assets/img/Product2.png')} />
            </div>
            <div>
              <img className="image" src={require('../../../assets/img/Product2.png')} />
            </div>
            <div className="Pict3">
              <img className="image" src={require('../../../assets/img/Product2.png')} />
            </div>
          </div>
        </div>
        <div className="Product-desc">
          <p className="Desc-header">Pembuatan Gubuk Baca Perpustakaan Alam</p>
         <div className="Desc-cat-div">
           <p className="Desc-cat-text">Bangunan</p>
         </div>

          <div className="progress-info-wrapper">
            <div className="progress-bar-wrapper">
              <ProgressBar className="" now={70} />
            </div>
            <div className="progress-text text-color-grey">{70}%</div>
          </div>
          <p className="Donate-collection">Terkumpul</p>

          <div className="Donate-text">
            <div className="Donate-text-div">
              <p className="Donate-collectionCount">
                <span className="Collection1">Rp. 16.500.000</span> 
                <span className="Collection2"> dari Rp. 20.000.000</span>
              </p>
            </div>

            <div className="Donate-date">
              <p>10 hari lagi</p>
            </div>
          </div>
          <div className="Line">

          </div>

         <div className="Desc-penggalang">
         <div className="Logo-penggalang">
              <img src={require('../../../assets/img/product-donate-logo.png')} />
            </div>
            <div className="Detail-penggalang">
              <div className="penggalang-name">Perpustakaan Alam &nbsp;
                <img src={require('../../../assets/img/verified-icon.png')} />
              </div>
              <div style={{fontSize: "13px", fontWeight: "300"}}>Sejak 16 April 2019</div>
              {/* <p className="Tanggal">Sejak 16 April 2019</p> */}
              <div className="location-wrapper">
                <img height="8px" src={require('../../../assets/img/icon-location.png')} />
                <div style={{fontSize: "13px", fontWeight: "300", marginLeft: "10px"}}>Kebumen</div>
              </div>
            </div>
         </div>

         <div className="Desc-donate">
          <p>
              Perpustakaan Alam yang berada di Desa Mergosono, 
              Kecamatan Buayan merupakan sebuah laboratorium 
              inspirasi dan ruang karya bagi anak-anak keluarga
              harapan dan masyarakat umum khususnya warga desa Mergosono.
              Perpustakaan ini didirikan oleh Nur Arifin SSos (25) warga RT
              1 RW 1 Desa setempat pata tahun 2018.
          </p>
         </div>
         <button className="Button-donate">
           <a href="/payment"><span>Donasi Sekarang</span></a>
         </button>
          <button style={{width: "100%"}} className="Button-share">
            <img src={require('../../../assets/img/bx_bx-share-alt.png')} /><span>Share Donasi</span></button>
        </div>
      </div>
    )
  }
}