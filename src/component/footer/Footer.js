import React, { Component } from 'react'
import './AseetFooter/Footer.css'
import Footer1 from './Footer1.js'
import Footer2 from './Footer2.js'
import Footer3 from './Footer3.js'

class BagianFooter extends Component {
  render() {
    return (

      <div className="background">
        <div className="bagian-atas">
          <Footer1 />
          <Footer2 />
          <Footer3 />
        </div>
        <div className="bagian-bawah">
          <p>
            <span class="material-icons">
              copyright
        </span>
        2020 Bantu Belajar
        </p>
        </div>
      </div>

    );
  }
}

export default BagianFooter;
