import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './navbar.css';
import Logo from '../../assets/img/logo.svg';
import SearchIcon from '../../assets/img/search-icon.png';
import { Redirect } from 'react-router';

export default class Navbarku extends Component{

  register = () => {
    return <Redirect push to="/register" />;
  }
  
  render() {
    return(
      <Nav className="navbar-wrapper" activeKey="/home">
        <div className="navbar-logo">
          <img
            className="logo" src={Logo} alt="Logo">
          </img>
        </div>

        <div className="navbar-item-wrapper">
          <Nav.Item>
            <Nav.Link className="navbar-item" href="/#carousel">BERANDA</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navbar-item" href="/#kategori">KATEGORI</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navbar-item" href="/#featuredProgram">DONASI</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navbar-item" href="/#news">BERITA</Nav.Link>
          </Nav.Item>
          <div className="search-bar-wrapper">
            <FormControl className="search-bar" type="text" placeholder="Cari penggalangan dana"/>
            <a href="/product"><Button className="search-button" type="submit">
              <img
                className=""
                src={SearchIcon}
                alt="Search Icon"
              ></img>
            </Button></a>
          </div>
          <div className="navbar-button-wrapper">
          <Nav.Item>
              <div className="button-login">
                <Nav.Link className="navbar-item login-text" href="/login">MASUK</Nav.Link>
              </div>
          </Nav.Item>
          <Nav.Item>
              <div className="button-register">
                <Nav.Link className="navbar-item register-text" href="/register">DAFTAR</Nav.Link>
              </div>
          </Nav.Item>
          </div>
        </div>
      </Nav>


    )
  }
}