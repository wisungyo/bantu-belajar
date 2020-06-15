import React, { Component } from 'react'
import './Organisation.css'
import OrgCard from './OrgCard.js'
import organisasi1 from './assets/organisasi1.jpg'
import organisasi2 from './assets/organisasi2.jpg'
import organisasi3 from './assets/organisasi3.jpg'
import organisasi4 from './assets/organisasi4.jpg'
import organisasi5 from './assets/organisasi5.jpg'
import organisasi6 from './assets/organisasi6.jpg'
import organisasi7 from './assets/organisasi7.jpg'
import organisasi8 from './assets/organisasi8.jpg'
import organisasi9 from './assets/organisasi9.jpg'
import organisasi10 from './assets/organisasi10.jpg'
import organisasi11 from './assets/organisasi11.jpg'
import organisasi12 from './assets/organisasi12.jpg'
import organisasi13 from './assets/organisasi13.jpg'
import organisasi14 from './assets/organisasi14.jpg'


class Organisation extends Component {
    render(){
        return(
        // <div className="container">
            <div className="backfround-organisasi">
                <div className="header-organisasi">
                        <div className="text-result"> 
                        Menampilkan 14 hasil pencarian organisasi “perpus”
                        </div>
                </div>
                <div className="kumpulan-card">
                  <a href="#" style={{textDecoration: "none"}}>
                    <div className="col-6">
                    <OrgCard
                    gambar={organisasi1}
                    namaPerpus="Perpustakaan Alam"
                    daerah="Kebumen"
                    />
                    </div>
                  </a>
                  <a href="#" style={{textDecoration: "none"}}>
                    <div className="col-6">
                    <OrgCard
                    gambar={organisasi2}
                    namaPerpus="Perpustakaan Muda Bahkti"
                    daerah="Wonosobo"
                    />
                    </div>
                  </a>
                </div>
                <div className="kumpulan-card">
                  <a href="#" style={{textDecoration: "none"}}>
                    <div className="col-6">
                    <OrgCard
                    gambar={organisasi3}
                    namaPerpus="Perpustakaan Kurip"
                    daerah="Wonosobo"
                    />
                    </div>
                  </a>
                  <a href="#" style={{textDecoration: "none"}}>
                    <div className="col-6">
                    <OrgCard
                    gambar={organisasi4}
                    namaPerpus="Perpustakaan Desa Majaksingi"
                    daerah="Magelang"
                    />
                    </div>
                  </a>
                </div>
                  <div className="kumpulan-card">
                  <a href="#" style={{textDecoration: "none"}}>
                   <div className="col-6">
                   <OrgCard
                   gambar={organisasi5}
                   namaPerpus="Perpustakaan 3 Dharma"
                   daerah="Solo"
                   />
                   </div>
                  </a>
                  <a href="#" style={{textDecoration: "none"}}>
                    <div className="col-6">
                    <OrgCard
                    gambar={organisasi6}
                    namaPerpus="Perpustakaan Al-Hikmah"
                    daerah="Kudus"
                    />
                    </div>
                  </a>
                </div>
                <div className="kumpulan-card">
                  <a href="#" style={{textDecoration: "none"}}>
                    <div className="col-6">
                    <OrgCard
                    gambar={organisasi7}
                    namaPerpus="Perpustakaan Buana"
                    daerah="Semarang"
                    />
                    </div>
                  </a>
                  <a href="#" style={{textDecoration: "none"}}>
                    <div className="col-6">
                    <OrgCard
                    gambar={organisasi8}
                    namaPerpus="Perpustakaan Desa Tulakan"
                    daerah="Sleman"
                    />
                    </div>
                  </a>
                </div>
                <div className="kumpulan-card">
                  <a href="#" style={{textDecoration: "none"}}>
                    <div className="col-6">
                    <OrgCard
                    gambar={organisasi9}
                    namaPerpus="Perpustakaan Mutiara"
                    daerah="Semarang"
                    />
                    </div>
                  </a>
                  <a href="#" style={{textDecoration: "none"}}>
                    <div className="col-6">
                    <OrgCard
                    gambar={organisasi10}
                    namaPerpus="Perpustakaan Sidoluhur"
                    daerah="Kebumen"
                    />
                    </div>
                  </a>
                </div>
                <div className="kumpulan-card">
                  <a href="#" style={{textDecoration: "none"}}>
                    <div className="col-6">
                    <OrgCard
                    gambar={organisasi11}
                    namaPerpus="Perpustakaan Sejahtera"
                    daerah="Magelang"
                    />
                    </div>
                  </a>
                  <a href="#" style={{textDecoration: "none"}}>
                    <div className="col-6">
                    <OrgCard
                    gambar={organisasi12}
                    namaPerpus="Perpustakaan Layar Negeri"
                    daerah="Kebumen"
                    />
                    </div>
                  </a>
                </div>
                <div className="kumpulan-card">
                  <a href="#" style={{textDecoration: "none"}}>
                    <div className="col-6">
                    <OrgCard
                    gambar={organisasi13}
                    namaPerpus="Perpustakaan Pustaka Nafas"
                    daerah="Purworejo"
                    />
                    </div>
                  </a>
                  <a href="#" style={{textDecoration: "none"}}> 
                    <div className="col-6">
                    <OrgCard
                    gambar={organisasi14}
                    namaPerpus="Perpustakaan Ananda"
                    daerah="Kebumen"
                    />
                    </div>
                  </a>
                </div>

                
            </div>
        // </div>
        );
    }
}


export default Organisation;