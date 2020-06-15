import React, { Component } from 'react';
import './Verification.css';

export default class VerificationResult extends Component {
  render(){ 
    return (
      <div className="Verification">
        <div className="Verification-card "> 
          <img src={require('../../assets/img/img_verifikasi-email.png')} />
          <p className="Verification-text">AKUNMU SUDAH TERVERIFIKASI </p>
          <p className="Verification-description">
            Masuk ke akun Bantu Belajar kamu sekarang 
            dan mulailah berdonasi membantu meningkatkan literasi masyarakat Indonesia
          </p>
          <button className="Login-button">Masuk</button>
        </div>
      </div>
  );
}
}