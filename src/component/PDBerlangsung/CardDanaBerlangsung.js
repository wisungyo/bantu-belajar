import React   from 'react'
import './PenggalanganDanaBerlangsung.css'
import Centang from './assets/centang.png'
import './CardDanaBerlangsung.css'
import { ProgressBar } from 'react-bootstrap';

import { Link } from 'react-router-dom';


const CardDanaBerlangsung =(props)=> {
    function jsUcfirst(string) {

        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className="container">

            <Link to="/" style={{ textDecoration: 'none' }} >
            <div className="DBerlangsung-card">
                <img className="DBerlangsung-card-img"src={props.gambar} alt="error"/>
                <div className="background-dalam">
                        <div class="DBerlangsung-tag row">
                            <div class="col" >
                                <p className="DBerlangsung-sebelah-kiri">{jsUcfirst(props.kategori)}</p>
                            </div>
                            <div class="col">
                                <p className="DBerlangsung-sebelah-kanan">{props.wilayah.replace('_', ' ')}</p>
                            </div>
                        </div>
                        <div className="DBerlangsung-judul">
                            <p><strong>
                                {props.judul}
                            </strong></p>
                        </div>
                        <div className="DBerlangsung-nama-organisasi">
                            <p>
                                {props.namaOrganisasi}
                                <img className="DBerlangsung-centang" src={require('../../assets/img/verified-icon.png')} alt="error" />
                            </p>
                        </div>
                        <div className="DBBerlangsung-progress row">
                            <div className="col-9">
                                <div className="DBBerlangsung-progress-bar-wrapper">
                                    <ProgressBar className="DBBerlangsung-progress-bar" now={props.nilaiProgress} />
                                    </div>
                            </div>
                                <div className="DBBerlangsung-progress-percent col-3">
                                <div className="DBBerlangsung-progress">{props.nilaiProgress.toFixed(0)+"%"}</div>
                            </div>
                        </div>

                        <div className="nominal">
                            <div class="row">
                                <div class="col-7">
                                    <p className="DBerlangsung-target">
                                        Terkumpul
                                    </p>
                                </div>
                                <div class="col-3">
                                        <p className="hari-deadline">{props.deadline}</p>
                                </div>
                            </div>
                        </div>
                        <div className="DBerlangsung-uang ">
                            <p>
                            Rp { props.nominal}
                            </p>
                        </div>
                     </div>
            </div>

            </Link>
        </div>
    );
}

export default CardDanaBerlangsung;