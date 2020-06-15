import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

import './navbar.css'
import Logo from '../../assets/img/logo.svg';
import Avatar from '../../assets/img/avatar.png'
import SearchIcon from '../../assets/img/search-icon.png';


export default class Navbarku extends Component{
  constructor() {
    super();
    this.state = {
      firstname: "Ferdian"
    }
  }

  render() {
    // const { firstname } = this.state;

    return(
      <Nav className="navbar-wrapper" activeKey="/home">
        <div className="navbar-logo">
          <a href="/home"><img
            className="logo" src={Logo} alt="Logo">
          </img></a>
        </div>
        <div className="navbar-item-wrapper">
          <Nav.Item>
            <Nav.Link className="navbar-item" href="/home#carousel">BERANDA</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navbar-item" href="/home#kategori">KATEGORI</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navbar-item" href="/home#featuredProgram">DONASI</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navbar-item" href="/home#news">BERITA</Nav.Link>
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
          <Dropdown className="navbar-button-wrapper">
            <Dropdown.Toggle className="navbar-item navbar-button" variant="outline-primary">
              <img
                className="avatar-user"
                src={Avatar}
                alt="Avatar User"
              ></img>
              <div className="name-user">{this.state.firstname}</div>
            </Dropdown.Toggle>
            {/* DROPDOWN ITEMS */}
            <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item className="abc" href="/edit-profile">Profil</Dropdown.Item>
            <Dropdown.Item className="abc" href="/logout">Keluar</Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
        </div>
      </Nav>


    )
  }
}