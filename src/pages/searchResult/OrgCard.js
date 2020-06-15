import React from 'react'
import './OrgCard.css'
import centangOrganisasi from './assets/centangOrganisasi.jpg'
import penempatanWilayah from './assets/penempatanWilayah.jpg'



const OrgCard =(props)=> {
    return (
            <div className="backgroud-card">
            <div class="shadow p-3 mb-5 bg-white rounded">
                <div className="kesatuan-card-organisasi">
               <div className="gambar-organiasi">
                    <img src={props.gambar} alt="error"/>
               </div>
               <div className="sebelah-kanan">
                <h2>
               {props.namaPerpus}.
                <img src={centangOrganisasi} alt="error"/>
                </h2>
                <p className="daerah-card-organisasi">
                <span class="material-icons">
                place
                </span>
                {props.daerah}
                </p>
               </div>
            </div>
          </div>
        </div>
    );
}

export default OrgCard;
