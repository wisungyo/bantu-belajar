import React from 'react'
import './AseetFooter/Footer3.css'
import logoFacebook from './AseetFooter/logoFacebook.png'
import logoInstagram from './AseetFooter/logoInstagram.png'
import logoTwitter from './AseetFooter/logoTwitter.png'


const Footer3 =()=> {
    return(
        <div className="footer-tiga">
            <div className="judul-footer-tiga">
                <p>
                    Social Media
                </p>
            </div>
            <div className="icons-footer">
            <img className="twitter" src={logoInstagram} alt="error"/>
            <img className="instagram"src={logoFacebook} alt="error"/>
            <img src={logoTwitter} alt="error"/>        
            </div>
        </div>
    );
}

export default Footer3;