import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editProfile, fetchProfile } from '../../actions/profileActions';

import DatePicker from 'react-datepicker';
import { Button } from 'react-bootstrap';
import { Form, Col } from 'react-bootstrap';
import './style-edit-profile.css';

import Avatar from '../../assets/img/avatar.png';
import "react-datepicker/dist/react-datepicker.css";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date(),
      firstname: "Ferdian",
      lastname: "Septiawan",
      email: "ferdianseptiawan91@gmail.com",
      dob: "",
      gender: "Pria",
      bio: "Pupus Hatiku",
      address: "Jogjakarta",
      errors: {}
    }
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const userProfile = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      dob: this.state.startDate,
      gender: this.state.gender,
      bio: this.state.bio,
      address: this.state.address
    }

    console.log(userProfile);
    this.props.editProfile(userProfile);
  }

  render() {

    return (
      <Form noValidate onSubmit={this.onSubmit}>
        <h1 className="h1-profile">Profil</h1>
        <div className="profile-wrapper">
          <div className="profile-left">
            <img
              className="profile-avatar"
              src={Avatar}
              alt="Avatar">
            </img>
            {/* <Form.File
              className="position-relative profile-button"
              required
              name="file"
              label=""
              id="validationFormik107"
              feedbackTooltip
            /> */}
            <Button className="profile-button" variant="secondary">Pilih Foto</Button>
            <p>Ukuran file: Maksimal 5 MB</p>
            <p>Ekstensi yang diperbolehkan: .JPG .JPEG .PNG</p>
          </div>
          <div className="profile-right">
            <Form>
              <Form.Row>
                <Col>
                  <Form.Group controlId="firstname">
                    <Form.Label>Nama Depan</Form.Label>
                    <Form.Control 
                      type="teks" 
                      value={this.state.firstname}
                      onChange={this.onChange} 
                    />
                  </Form.Group>
                </Col>
              
                <Col>
                  <Form.Group controlId="lastname">
                    <Form.Label>Nama Belakang</Form.Label>
                    <Form.Control 
                      type="teks"
                      value={this.state.lastname}
                      onChange={this.onChange} 
                    />
                  </Form.Group>
                </Col>
              </Form.Row>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  value={this.state.email}
                  onChange={this.onChange}  
                />
              </Form.Group>

              <Form.Group controlId="dob">
                <Form.Label>Tanggal Lahir</Form.Label>
                <DatePicker className="form-control"
                  dateFormat="yyyy/MM/dd"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  value={this.state.startDate}
                />
              </Form.Group>

              <Form.Label>Jenis Kelamin</Form.Label>
              <Form.Group className="profile-gender">
                <Form.Check
                  className="profile-checkbox"
                  type="radio"
                  label="Pria"
                  name="formHorizontalRadios"
                  id="gender"
                  value="Pria"
                  checked={this.state.gender === "Pria"}
                  onChange={this.onChange} 
                />
                <Form.Check
                  className="profile-checkbox"
                  type="radio"
                  label="Wanita"
                  name="formHorizontalRadios"
                  id="gender"
                  value="Wanita"
                  checked={this.state.gender === "Wanita"}
                  onChange={this.onChange} 
                />
              </Form.Group>

              <Form.Group controlId="bio">
                <Form.Label>Bio</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows="2"
                  value={this.state.bio}
                  onChange={this.onChange}  
                />
              </Form.Group>

              <Form.Group controlId="address">
                <Form.Label>Alamat</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows="2"
                  value={this.state.address}
                  onChange={this.onChange}  
                />
              </Form.Group>

              <Button className="profile-submit-button" variant="primary" type="submit">
                Simpan
              </Button>
            </Form>
          </div>
        </div>
      </Form>
    )
  }
}

Profile.propTypes = {
  editProfile: PropTypes.func.isRequired,
  userProfile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  userProfile: state.userProfile
})

export default connect(
  mapStateToProps,
  { editProfile, fetchProfile }
)(Profile);