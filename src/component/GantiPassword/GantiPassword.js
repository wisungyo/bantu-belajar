import React from 'react'
import './GantiPassword.css'


const GantiPassword = () => {
    return (
    <div className="container">
        <div className="background">
            <div className="form-group">
                <h2 className="judul">Ubah Password</h2>
            </div>
           <div className="kumpulan-form">
           <div class="form-group">
                <label className="form" for="password">Password Saat ini</label>
                <input type="password" class="form-control fa fa-eye" id="myInput"  required/>
                <label className="form" for="password">Password Baru</label>
                <input type="password" class="form-control" id="myInput"  required/>
                <label className="form" for="password">Korfirmasi Password Baru</label>
                <input type="password" class="form-control" id="myInput"  required/>
            </div>
            </div>
            <button type="submit" class="btn btn-primary">Ubah Password</button>
            </div>
        </div>
    );
}
export default GantiPassword;