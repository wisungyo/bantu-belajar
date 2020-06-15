import React, { useState, Component } from 'react';
import { Image } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { forgetPassword } from '../../actions/authActions';
import classnames from 'classnames';

import Logo from '../../assets/img/logo.svg';
import './style-forget.css';
import MyVerticallyCenteredModal from './VerticallyCenteredModal';

class Forget extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      errors: {},
      modalShow: false,
      setModalShow: false
    }
  }

  componentDidMount() {
    // if logged in and user navigates to this page, should redirect to /dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/new-password");
    }

    if (nextProps.errors) {
      this.setState ({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email
    }

    // console.log(userData);
    this.props.forgetPassword(userData); // since we handle the redirect within our component,
    // we don't need to pass in this.props.history as a parameter
  };

  setModalShowHide = () => {
    const { setModalShow } = this.state;
    this.setState({ setModalShow: false });
  }

  setModalShowShow = () => {
    const { setModalShow } = this.state;
    this.setState({ setModalShow: true });
  }

  // modalShowFunc = () => {
  //   const { modalShow } = this.state;
  //   this.setState({ modalShow: !modalShow });
  // }

  render = () => {
    const { errors, setModalShow, modalShow } = this.state;

    return(
      <>
        <div className="wrapper-forget">
          <Image 
            className="logo-forget"
            src={Logo}
            alt="Bantu Belajar"
          />

          <Form noValidate onSubmit={this.onSubmit} className="form-forget">
            <Form.Group className="group-title-form" controlId="forgetPassword">
              <Form.Label className="title-form">
                Lupa Password
              </Form.Label>
              <Form.Text className="subtitle-form">
                Masukkan email yang terdaftar. 
                Kami akan mengirimkan kode verifikasi untuk mengatur ulang kata sandi.
              </Form.Text>
            </Form.Group>

            <Form.Group className="group-email" controlId="email">
              <Form.Label className="text-field">Email</Form.Label>
              <Form.Control 
                // className="field-email" 
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound
                })} 
                type="email" 
                value={this.state.email}
                error={errors.email}
                onChange={this.onChange}
              />
              <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
              </span>
            </Form.Group>

            <Button 
              className="button-form" 
              variant="primary" 
              type="submit"
              onClick={this.setModalShowFunc}
            >
              Lanjut
            </Button>

            <Form.Group className="group-title-form" controlId="formBasicTitle">
              <Form.Text className="footer-subtitle-form">
                Kembali ke <a href="/login">Masuk</a> atau <a href="/register">Daftar</a>
              </Form.Text>
            </Form.Group>

            <MyVerticallyCenteredModal
              show={this.modalShow}
              onHide={this.setModalShowHide} 
            />
          </Form>
        </div>
      </>
    );
  }
}

Forget.propTypes = {
  forgetPassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { forgetPassword }
)(Forget);