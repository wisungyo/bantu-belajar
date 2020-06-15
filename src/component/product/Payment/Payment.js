import React, { Component } from 'react';
import './Payment.css'
import { ProgressBar, Button } from 'react-bootstrap';


export default class Payment extends Component {
  render(){
    return(
      <div className="Payment-header">
        <div className="Payment-form">
          <div>
            <p className="Payment-instruction">Lengkapi Data Donasi</p>
          </div>
          <div className="Payment-nominal">
            <form className="form-for-payment">
              <label>Nominal Donasi</label>
              <div className="Nominal">
                <input type="number" />
                <span>Rp</span>
                <p className="Note">Donasi mulai dari Rp 10.000</p>
              </div>

              <div className="Payment-method">
                <p className="Payment-method-text">Metode Pembayaran</p>
                
                <div className="Payment-method-list">
                  <div className="width-logo">
                    <img  src={require('../../../assets/img/bca.png')}/>
                  </div>
                  <div style={{color: "#4D4D4D", paddingTop: "2px"}}>Transfer BCA</div>
                  <img height="15px" className="Checked" src={require('../../../assets/img/check.png')} />
                </div>
                <div className="Payment-method-list">
                  <div className="width-logo">
                    <img className="" src={require('../../../assets/img/bri.png')}/>
                  </div>
                  <div style={{color: "#4D4D4D", paddingTop: "2px"}}>Transfer BRI</div>
                </div>
                <div className="Payment-method-list">
                  <div className="width-logo">
                    <img className="" src={require('../../../assets/img/bni.png')}/>
                  </div>
                  <div style={{color: "#4D4D4D", paddingTop: "2px"}}>Transfer BNI</div>
                </div>
                <div className="Payment-method-list">
                  <div className="width-logo">
                    <img className="" src={require('../../../assets/img/mandiri.png')}/>
                  </div>
                  <div style={{color: "#4D4D4D", paddingTop: "2px"}}>Transfer MANDIRI</div>
                </div>
              </div>
              <a href="/payment-verification"><Button className="Button-donate" variant="primary">
                Donasi Sekarang
              </Button></a>
              <a href="/product"><button className="Button-cancel">
                Kembali
              </button></a>
            </form>
          </div>
        </div>

        <div className="Donate-detail">
          <img className="Donate-img" src={require('../../../assets/img/payment-detail.png')} />
          <p className="Donate-Title">Pembuatan Gubuk Baca Perpustakaan Alam </p>
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
          </div>
          <div className="Donate-date">
            10 hari lagi
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


        </div>
      </div>
    )
  }
}