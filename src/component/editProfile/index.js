import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProfile } from '../../actions/profileActions';

import { Nav, Tab } from 'react-bootstrap';
import Profile from './profile';
import './style-edit-profile.css';
import Avatar from '../../assets/img/avatar.png';
import UbahPassword from './ubahPassword';

class EditProfile extends Component {
  
  // componentWillMount() {
  //   this.props.fetchProfile();
  //   console.log(this.props.userProfile);
  // }
  
  render() {

    return (
      <Tab.Container defaultActiveKey="profil">
      <div className="edit-profile-wrapper">
        <div className="panel-wrapper">
          <div className="panel-left">
            <img
              className="avatar"
              src={Avatar}
              alt="Avatar">
            </img>
            <div className="user-name">Ferdian Setiawan</div>
            <div className="user-time">Member sejak Mei 2020</div>
            <div className="navigation-panel-wrapper">
              <Nav variant="pills" className="flex-column navigation-profile">
                <Nav.Item className="navigation-item-wrapper">
                  <Nav.Link className="navigation-item-profile" 
                    eventKey="profil">Profil</Nav.Link>
                  <hr></hr>
                </Nav.Item>
                <Nav.Item className="navigation-item-wrapper">
                  <Nav.Link className="navigation-item-profile" 
                    eventKey="ubahPassword">Ubah Password</Nav.Link>
                  <hr></hr>
                </Nav.Item>
                <Nav.Item className="navigation-item-wrapper">
                  <Nav.Link className="navigation-item-profile" 
                    eventKey="keluar">Keluar</Nav.Link>
                  <hr></hr>
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <div className="panel-right">
            <Tab.Content>
              <Tab.Pane eventKey="profil">
                <Profile />
              </Tab.Pane>
            </Tab.Content>

            <Tab.Content>
              <Tab.Pane eventKey="ubahPassword">
                <UbahPassword />
              </Tab.Pane>
            </Tab.Content>

            <Tab.Content>
              <Tab.Pane eventKey="keluar">
                {/* Masukkan component keluar/logout */}
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </div>
      </Tab.Container>
    )
  }
}

EditProfile.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  userProfile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  userProfile: state.userProfile
})

export default connect(
  mapStateToProps,
  { fetchProfile }
)(EditProfile);