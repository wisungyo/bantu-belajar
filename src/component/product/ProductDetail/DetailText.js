import React, { Component } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import { Tab } from 'react-bootstrap';
//import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
// import oiReload from '../../assets/img/oi-reload.png';
import './ProductText.css'

export default class Product extends Component{
  render() {
    return(
      <div style={{marginTop: "30px", marginBottom: "30px"}} className="wrapper-utama">
      <Tabs defaultActiveKey="Deskripsi" id="uncontrolled-tab-example">
        <Tab eventKey="Deskripsi" title="Deskripsi">
          <div className="description-text">
            <p style={{fontWeight: "300"}}>Program literasi membaca Perpustakaan Alam terdiri dari kelas membaca, kelas bermain, kelas inspirasi, dan kelas karya. Program tersebut adalah program yang digunakan dalam meningkatkan literasi membaca masyarakat Desa Mergosono khususnya anak-anak. Peneliti melakukan penelusuran untuk mengetahui kebenaran inforrmasi mengenai program unggulan Perpustakaan Alam. Bedasarkan penelusuran melalui arsip dokumentasi Perpustakaan Alam, dalam arsip tersebut terdapat data-data tentang program unggulan Perpustakaan Alam yang dijadikan satu dalam buku tentang Perpustakaan Alam. Peneliti juga melakukan penelusuran melalui wawancara untuk mengetahui kebenaranya, berikut kutipan wawancara dengan “N” pimpinan Perpustakan alam, yang dapat digaris bawahi bahwa: <br></br><br></br>
                “Untuk anak-anak kita ada program literasi mas dengan 4 kegiatan utama, latihan membaca, kelas bermain, kelas inspirasi dan kelas karya” <br></br>

	Selain melakukan wawancara dan arsip dokumentasi untuk mendapatkan informasi mengenai program literasi membaca, peneliti juga melakukan penelusuran melalui observasi. Berdasarkan hasil penelusuran melalui observasi pada tanggal 10 Oktober 2019, peneliti memperoleh data mengenai program literasi membaca oleh Perpustakaan Alam yaitu ada kelas membaca, kelas bermain, kelas inspirasi, dan kelas karya.  Melalui program unggulan tersebut, diharapkan masyarakat Desa Mergosono dapat memperoleh manfaat yang berguna baik bagi dirinya maupun orang lain sehingga kehadiran Perpustakaan Alam dapat membawa pengaruh yang baik yang dapat terus mencerdaskan masyarakatnya.  Adapun Program unggulan yang digunakan di Perpustakaan Alam yaitu: <br></br><br></br>
1)	Kelas Membaca <br></br>
Program kelas membaca merupakan program yang dibuat untuk meningkatkan kemampuan membaca  dan budaya membaca masyarakat. Melalui program ini peserta dapat menumbuhkan kemampuan dan kebiasaan membaca untuk menambah wawasan dan pengetahuan mereka. Peneliti melalukan penelusuran dengan melakukan wawancara dengan “S” pengelola Perpustakaan Alam yang dapat digaris bawahi bahwa kelas membaca itu konsepnya membaca dan bercerita bersama-sama (hasil wawancara pada 3 November 2019).<br></br><br></br>
2)	Kelas Bermain <br></br>
Kelas bermain merupakan salah satu program dengan model belajar sambil bermain. Perpustakaan alam menerapkan pembelajaran yang menyenangkan. Proses belajar yang menyenangkan dapat meningkatkan minat membaca dan belajar peserta. Peserta dapat belajar tanpa merasa bosan, karena  pada dasarnya anak memiliki hak untuk belajar dan bermain, bermain dilakukan agar minat anak mengunjungi Perpustakaan Alam dan belajar bisa tumbuh sehingga anak menjadi seorang pembelajar mandiri sepanjang hayat. Peneliti melalukan penelusuran dengan melakukan wawancara dengan “S” pengelola Perpustakaan Alam yang dapat digaris bawahi bahwa: <br></br>
“Kelas bermain ini menyajikan berbagai permainan tradisional, mendongeng dan keliling sekitar perpustakaan alam. Tujuannya agar tetap terjaga budaya bangsa melalui permainan tradisional” (hasil wawancara pada 3 November 2019). <br></br><br></br>
3)	Kelas Inspirasi <br></br>
Kelas inspirasi merupakan program di rancang untuk memberikan motivasi kepada anak-anak dalam belajar, dengan cara pengenalan tokoh berpengaruh, baik biografinya, pendidikanya, maupun karya-karyanya. Melalui kelas inspirasi ini anak, anak menjadi lebih mudah untuk menerima sebuat pembelajaran pengalaman dari seorang tokoh, sehingga anak-anak mudah mengamati, meniru dan mengimplementasikan dalam dengan kehidupan masing-masing. Peneliti melakukan wawancara dengan pimpinan Perpustakaan Alam “N” untuk menanyakan tentang kelas inspirasi, adapun hasil wawancara dapat digaris bawahi bahwa: <br></br>
“Sangat penting dan urgen kelas inspirasi ini di adakan di perpustakaan alam, yang pertama menjadi terobosan mentransfer ilmu lewat media contoh  sosok yang sudah jelas dan berengaruh dalam sekala jasanya dan sudah teruji dalam perlananya sejarah tutur maupun tulis dan buktinya. Dengan  meceritakan/mencontohkan seperti ini menjadikan anak-anak atau pengunjung mudah menerima materi yang di berikan dan sangat cepat berdampaknya untuk menumbuhkan semangat belajar dan daya juang untuk merai cita cita setiap anak.” <br></br><br></br>
4)	Kelas Karya <br></br>
Kelas karya adalah sebuah kelas yang menyediakan wadah untuk anak-anak prakik membuat sebuah karya, di kelas ini anak-anak diajarkan membuat berbagai hal. Berangkat dari pengetahuan yang didapatkan setelah membaca peserta akan membuat suatu karya baik secara individu maupun secara berkelompok. Berdasarkan arsip dokumentasi kelas karya yang pernah dilakukan adalah membuat kerajinan seperti membuat topeng dari kertas, bunga dari plasitik bekas, membuat lampion dari botol bekas, membuat jamu, peserta juga dikenalkan dengan tanaman tanaman hidroponik. <br></br>
Kerajinan yang dibuat diperpustakaan alam utamanya adalah berbahan barang bekas, selain menghemat anggaran hal tersebut juga berfungsi untuk memanfaatkan sampah-sampah yang memiliki daya urai lama seperti plastik, botol dan kaleng. Selain kerajinan kelas karya juga mencoba mengenalkan produk-produk yang berasal dari alam seperti membuat jamu, praktik bercocok tanam dan berternak <br></br>
. </p>
          </div>
          <div variant="info" className="alert-button">
            <p className="proposal">
              Pengalokasian dana donasi secara lebih rinci dapat dilihat dengan mendownload proposal dibawah ini:
            </p>
            <Button className="download-button" variant="primary">Download Proposal</Button>{' '}
          </div>
        </Tab>
        <Tab eventKey="Donasi" 
          title={
            <div className="tabs-wrapper">
              <div className="home-teks">Donasi</div>
              <div className="home-counter">123</div>
            </div>
          }>
          <div className="description-wrapper">
            <p className="donatur-name">Sri Yuanita</p>
            <p className="set-donation">5 hari yang lalu</p>
            <p className="amount">RP 1.000.000</p>
          </div>
          <div className="description-wrapper">
            <p className="donatur-name">Kukuh Pradipto</p>
            <p className="set-donation">7 hari yang lalu</p>
            <p className="amount">RP 2.000.000</p>
          </div>
          <div className="description-wrapper">
            <p className="donatur-name">Anisa Setiawati</p>
            <p className="set-donation">7 hari yang lalu</p>
            <p className="amount">RP 1.500.000</p>
          </div>
          <div className="description-wrapper">
            <p className="donatur-name">Wisnu Prasetyo</p>
            <p className="set-donation">5 hari yang lalu</p>
            <p className="amount">RP 750.000</p>
          </div>
          <div className="reload-donatur">
            {/* <img
              className="icon-reload" src={oiReload} alt="reload">
            </img> */}
            <p>TAMPILKAN LEBIH</p>
          </div>
        </Tab>
      </Tabs>
    </div>
    )
  }
}