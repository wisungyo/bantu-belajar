import React from 'react'
import './AseetFooter/Footer2.css'

const Footer2 = () => {
    return (
        <div className="footer-dua">
            <div className="judul">
                <p>
                    Hubungi Kami
                </p>
            </div>
            <div className="alamat">
                <p>
                Jalan Monjali No.155, Kutu Dukuh, Sinduadi, Kabupaten Sleman, Daerah Istimewa Yogyakarta
                </p>
            </div>
            <div className="kontak">
                <p className="telepon">
                <span class="material-icons">
                call
                </span>
                 089622374123
                </p>
                <p className="email">
                <span class="material-icons">
                email
                </span>
                info@bantubelajar.id
                </p>
            </div>
        </div>
    );
}

export default Footer2;