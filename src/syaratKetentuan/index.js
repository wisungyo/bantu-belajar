import React , { Component } from 'react';

import { Tab } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

// importing css for this page
import './style-syarat-ketentuan.css';

class SyaratKetentuan extends Component {
  render = () => {
    return(
      <>
      <div className="main-wrapper">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column navigation">
                <Nav.Item className="navigation-item-wrapper-syarat">
                  <Nav.Link className="navigation-item" 
                    eventKey="first">Syarat & Ketentuan</Nav.Link>
                  <hr></hr>
                </Nav.Item>
                <Nav.Item className="navigation-item-wrapper-syarat">
                  <Nav.Link className="navigation-item" 
                    eventKey="second">Kebijakan Privasi</Nav.Link>
                  <hr></hr>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="content-syarat">
                    <h1>Syarat & Ketentuan</h1>

                    <p>Selamat datang di Bantu Belajar</p>
                    <p>Dengan mengunjungi dan/atau menggunakan Bantu Belajar, 
                      maka baik pengunjung maupun pengguna (“Anda”) dinyatakan 
                      telah memahami dan menyepakati semua isi dalam syarat dan 
                      ketentuan di bawah ini. Apabila Anda sebagai pengguna situs 
                      tidak menyetujui salah satu,sebagian atau seluruh isi syarat 
                      dan ketentuan ini, maka Anda tidak diperkenankan untuk 
                      menggunakan layanan di situs kami.</p>
                    <p>Pengguna situs sangat dianjurkan untuk membaca dengan 
                      seksama segala ketentuan di bawah ini karena akan berdampak 
                      kepada hak dan kewajiban sebagai pengguna situs ini. 
                      Pertanyaan lainnya seputar Kitabisa anda dapat menanyakan 
                      langsung kepada kami di info@bantubelajar.id.</p>

                    <p className="text-title">Kewajiban Pengguna Situs</p>
                    <p>1. Wajib menyatakan diri sebagai seseorang yang cakap di 
                      mata hukum sehingga dapat mempertanggungjawabkan segala 
                      tindakan yang merupakan kelalaian dan/atau pelanggaran atas 
                      syarat dan ketentuan penggunaan Situs.<br></br>2. Wajib 
                      memberikan data dan informasi dengan benar, tidak menyesatkan, 
                      dan/atau pemalsuan.<br></br>3. Wajib menaati segala bentuk 
                      aturan terkait segala syarat & ketentuan serta kebijakan 
                      yang telah dibuat oleh pengelola situs crowdfunding Bantu Belajar</p>
                  
                    <p className="text-title">Larangan</p>
                    <p>1. Dilarang memberikan dan/atau menyuruh pihak lain untuk 
                      memberikan data atau informasi yang tidak benar, serta 
                      memalsukan data atau keterangan pihak lain.<br></br>2. 
                      Dilarang melakukan dan/atau menyuruh pihak lain untuk 
                      melakukan tindakan apapun yang dapat menyebabkan pelanggaran 
                      terhadap sebagian atau seluruh hak kekayaaan intelektual dari 
                      Pengelola Situs maupun Pengguna Situs lainnya.<br></br>3. 
                      Dilarang melakukan dan/atau menyuruh pihak lain untuk melakukan 
                      tindakan apapun yang dapat merusak, mengganggu, atau membatasi 
                      sistem pada Situs.<br></br>4. Dilarang melakukan dan/atau 
                      menyuruh pihak lain untuk melakukan tindakan apapun yang 
                      bertentangan dengan hukum, melanggar kesusilaan, maupun 
                      melanggar hak Pengelola maupun hak pihak Pengguna Situs lainnya.</p>

                    <p className="text-title">Donatur</p>
                    <p>Pengunjung Situs berkewajiban untuk:</p>
                    <p>1. Mencermati segala informasi mengenai ide dan/atau 
                      kampanye penggalangan dana yang dimuat di dalam Situs 
                      sebelum memberikan dukungan dan berdonasi.<br></br>2. 
                      Tidak memberikan informasi tambahan yang palsu dan/atau 
                      menyesatkan atas segala halaman, tautan, dan berbagai bentuk 
                      media lainnya dari kampanye suatu penggalangan dana di situs 
                      Indonesia Dermawan.<br></br>3. Bertanggung jawab atas donasi 
                      yang telah disalurkan dan menyadari konsekuensi bahwa Bantu 
                      Belajar berkemungkinan tidak dapat melaksanakan secara sebagian 
                      tau sepenuhnya atas kampanye dan/atau reward/imbalan yang telah 
                      dijanjikan sebelumnya pada kampanyenya.<br></br>4. Wajib tidak 
                      melakukan pencucian uang dan/atau menggunakan uang yang berasal 
                      dari sumber yang tidak sah secara hukum dalam mendonasikan uangnya 
                      untuk mendukung ide dan/atau kampanye penggalangan dana yang ada di 
                      dalam Situs.<br></br>5. Donasi yang masuk ke Bantu Belajar tanpa 
                      memakai kode unik dan tidak melakukan konfirmasi akan dicatat 
                      sebagai donasi pilihan kami.<br></br>6. Dalam transaksi pembayaran 
                      dengan metode Transfer, kelebihan pembayaran dari karena disebabkan 
                      penambahan ID Transfer akan dianggap sebagai donasi.</p>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div>
                    <h1>Kebijakan Privasi</h1>

                    <p>Kebijakan privasi yang dimaksud Bantu Belajar adalah acuan 
                      yang mengatur dan melindungi penggunaan data dan informasi penting 
                      para Pengguna Bantu Belajar, Data dan informasi yang telah 
                      dikumpulkan pada saat mendaftar, mengakses, dan menggunakan 
                      layanan di Bantu Belajar seperti alamat, alamat e-mail, foto, gambar, dan lain-lain.</p>
                    <p>Kebijakan-kebijakan tersebut di antaranya:</p>
                    <p>1. Bantu Belajar tunduk terhadap kebijakan perlindungan data 
                      pribadi Pengguna sebagaimana yang diatur dalam Peraturan Menteri 
                      Komunikasi dan Informatika Nomor 20 Tahun 2016 Tentang Perlindungan 
                      Data Pribadi Dalam Sistem Elektronik yang mengatur dan melindungi 
                      penggunaan data dan informasi penting para Pengguna.<br></br>2. Bantu 
                      Belajar melindungi segala informasi yang diberikan Pengguna pada saat 
                      pendaftaran, mengakses, dan menggunakan seluruh layanan kami.<br></br>3. 
                      Bantu Belajar berhak menggunakan data dan informasi para Pengguna demi 
                      meningkatkan mutu dan pelayanan kami.<br></br>4. Bantu Belajar tidak 
                      bertanggung jawab atas pertukaran data yang dilakukan sendiri di antara 
                      Pengguna.<br></br>5. Bantu Belajar hanya dapat memberitahukan data dan 
                      informasi yang dimiliki oleh para Pengguna bila diwajibkan dan/atau diminta 
                      oleh institusi yang berwenang berdasarkan ketentuan hukum yang berlaku, 
                      perintah resmi dari Pengadilan, dan/atau perintah resmi dari instansi atau 
                      aparat yang bersangkutan.<br></br>6. Bantu Belajar tunduk terhadap UU Nomor 
                      11 tahun 2008 tentang Informasi dan Transaksi Elektronik (ITE).</p>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      </>
    );
  }
}

export default SyaratKetentuan;