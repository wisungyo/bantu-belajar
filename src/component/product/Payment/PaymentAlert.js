import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './PaymentAlert.css'


export default class PaymentAlert extends Component {
  render() {
    return (
      <div className="Payment-header">
          <div className="Payment-card">
            <p className="Payment-text">Transaksi Donasi</p>
            <p className="Paymnet-instruction">
             Silahkan lakukan transaksi donasi melaui bank transfer,
             dengan menambahkan tiga digit kode unik <b>145</b> sebesar <b>Rp 100.145 </b>
            </p>

            <p className="Payment-note">Rekening Bantu Belajar </p>
            <div className="Payment-method-list">
              <img style={{height: "40px", marginTop: "-10px", marginLeft: "-2px"}} className="Payment-bank" src={require('../../../assets/img/bca.png')} />
              <p style={{marginTop: "4px"}} className="Payment-account">234587878676765</p>
              <p className="Copy">SALIN</p>
            </div>
            <Button style={{width: "100%"}} className="Payment-button" variant="primary">
            Kirim Reminder ke Email 
            </Button>
          </div>
      </div>
    )
  }
}