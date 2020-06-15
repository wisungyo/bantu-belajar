import React from 'react'
import './AseetFooter/Footer1.css'
import logoBantu from './AseetFooter/logoBantu.png'



const Footer1 =()=> {
    return(
        <div className="background-footer1">
            <div className="footer-satu">
                <img src={logoBantu} alt="error"/>
                <p className="keterangan">
                Bantu Belajar adalah website penggalangan dana untuk membantu meningkatkan kualitas pendidikan masyarakat melalui peningkatam kualitas taman bacaan masyarakat (TBM) baik dari sektor kegiatan maupun fasilitasnya.
                </p>
            </div>
        </div>
    );
}

export default Footer1;