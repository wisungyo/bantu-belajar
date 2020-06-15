import React, { Component } from 'react';
import DetailBerita from '../../assets/img/berita-1.png';
import './newsDetail.css'


export default class NewsDetail extends Component {
  render() {
    return(
      <div className="detail-berita">
        <img
            className="news-photo" 
            src={DetailBerita} 
            alt="detail berita">
          </img>
          <p className="news-title">GERAKAN LITERASI MASYARAKAT DESA PLUMBON KAB. KEBUMEN OLEH TBM MERDEKA INDONESIA</p>
          <p className="news-description">Pendidikan adalah alat utama bagi manusia untuk meningkatkan standar hidup mereka. Dengan pendidikan, manusia dapat bekerja, meningkatkan ekonomi, dan berpartisipasi dalam lingkungan sosial. Dalam mendukung program pendidikan untuk masyarakat yang adil, pemerintah menyediakan jalur pendidikan nonformal dan informal melalui pengembangan pusat pendidikan non-formal dan informal serta perpustakaan umum. Taman Bacaan Masyarakat atau dikenal dengan singkatan TBM adalah perpustakaan skala kecil yang dikenal sebagai sudut baca, rumah baca, rumah pintar, dan sebagainya. Dalam petunjuk teknis TBM yang dikeluarkan oleh Kementerian Pendidikan dan Kebudayaan, TBM adalah lembaga yang mempromosikan kebiasaan membaca yang menyediakan ruang untuk membaca, berdiskusi, membaca buku, menulis, dan kegiatan serupa lainnya, yang dilengkapi dengan bahan bacaan, seperti buku, majalah, tabloid, surat kabar, komik, dan materi multimedia lainnya, dan didukung oleh sumber daya manusia yang bertindak sebagai motivator.<br></br><br></br>TBM di Surabaya bertempat di balai desa, balai RW, taman, mall dan lokasi lain. Keberadaan TBM bertujuan untuk membantu pengembangan masyarakat di daerah-daerah yang sulit dijangkau oleh lembaga pendidikan formal dan perpustakaan umum. Sejauh ini, TBM yang diawasi oleh Dinas Perpustakaan Kota Surabaya telah melakukan program pemberdayaan masyarakat, khususnya dalam pendidikan anak-anak melalui program bimbingan belajar dan usaha kreatif masyarakat. Kegiatan dalam TBM tidak selalu berkaitan langsung dengan koleksi, namun TBM juga mendukung kegiatan usaha kecil menengah (UKM) masyarakat sekitar. Hasil penelitian mengenai peran TBM dalam pemberdayaan masyarakat Surabaya menyatakan bahwa 90 persen dari UKM membuktikan bahwa pengembangan TBM belum relevan dengan kebutuhan masyarakat untuk meningkatkan perekonomian. Hal itu diketahui berdasarkan survey dari 14 TBM, di mana dua belas di antaranya telah melakukan pelatihan.<br></br><br></br>Hal itu terkait dengan profesionalisme personel TBM, di mana mayoritas lulusan Sekolah Menengah Atas (SMA/SMK) yang dilatih untuk mengelola TBM secara sederhana. Mengelola tidak hanya menjaga koleksi, tetapi juga bagaimana mengembangkan TBM yang mendukung masyarakat sekitar. Untuk melakukan itu, idealnya petugas TBM membutuhkan pendidikan dasar di bidang perpustakaan. Perpustakaan Kota seharusnya memprioritaskan sumber daya manusia sebagai pertimbangan utama ketika mendirikan TBM. Sumber daya manusia yang kompeten diharapkan mampu mengembangkan TBM sesuai dengan tujuannya. Data di lapangan menunjukkan bahwa apa yang dilakukan petugas TBM hanyalah membuka, menunggu, serta melayani pengunjung. Mereka hampir tidak memiliki program pendidikan dan pemberdayaan ekonomi dalam mengembangkan TBM.<br></br><br></br>Sementara itu, data investigasi menunjukkan bahwa TBM menempati ruang seadanya di kelurahan, balai RW atau bangunan terbuka kecil di lingkungan tersebut, bahkan 50% di antaranya tidak cukup nyaman untuk tempat belajar. Program pemberdayaan tidak hanya dilakukan dengan menyediakan koleksi, akan tetapi juga menyediakan tempat bagi orang-orang untuk berkumpul dan bertukar ide, untuk tujuan pelatihan. Rata-rata TBM Kota Surabaya tidak memiliki fasilitas seperti itu. Fasilitas pendukung seperti komputer dan koneksi Wi-Fi juga tidak tersedia dalam TBM. Sedangkan fakta membuktikkan bahwa internet sudah menjadi kebutuhan misalnya sumber belajar interaktif, inspirasi pengembangan bisnis, dan media untuk promosi produk. <br></br><br></br>Selain itu, TBM sedang mengujicobakan beberapa program terkait pemberdayaan. Diantaranya, pembelajaran, kerajinan kolektif anak-anak, program insidentil dan informal mencakup pelatihan bekerjasama dengan LSM atau UKM lokal.  Kendala yang dihadapi oleh TBM diantaranya adalah kehilangan koleksi, kesulitan pengadaan koleksi, dan kesulitan dalam membuat program misalnya kurangnya dana, kurangnya kesadaran masyarakat untuk menggunakan TBM, dan personel TBM yang tidak bekerja penuh waktu karena separuh waktunya diminta untuk membantu di perpustakaan sekolah. Inovasi yang dilakukan oleh TBM juga belum terlihat, masih terbatas pada promosi melalui mulut ke mulut, selebaran / poster, dan penyebaran ke masyarakat.</p>
          <div className="publised"> 
          <p className="writer">Penulis</p>
          <p className="name">: Endang Fitriyah Mannan / Senin, 1 Jan 2020 </p>
          </div>
      </div>

    )
  }
}