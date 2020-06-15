import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

import LoginImg from '../../assets/img/login-img.svg';
import Logo from '../../assets/img/logo.svg';
import './style-login.css';
import '../../assets/css/bootstrap-grid.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isPasswordShown: false,
      errors: {}
    }
  }

  componentDidMount() {
    // if logged in and user navigates to login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home"); // push user to dashboard when they login
    }
    
    if (nextProps.errors) {
      this.setState({
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
      email: this.state.email,
      password: this.state.password
    }

    // console.log(userData);
    this.props.loginUser(userData); // since we handle the redirect within our component,
    // we don't need to pass in this.props.history as a parameter
  };

  // toggle password visibility
  tooglePasswordVisibility = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  render = () => {
    const { isPasswordShown, errors } = this.state;
    // const { values, setValues } = useState({ email: "", password: "" });
    
    return(
      <div>
        <Container className="login-main-container" width="100%" height="100%" fluid>
        <Image className="logo-login-mobile" src={Logo} alt="Bantu Belajar" />
        <div className="login-row">
            {/* this is left side panel of the login page */}
            <div className="column-left col-lg-6 ">
              <div className="media-login">
                <a href="/"><Image className="logo-login" src={Logo} alt="Bantu Belajar" /></a>
                <Image className="image-login" src={LoginImg} alt="Login Image" />
                <div className="moto-login">
                  <p className="text-title">Donasi Mudah di Bantu Belajar</p>
                  <p className="text-subtitle">Tingkatkan literasi masyarakat Indonesia</p>
                </div>
              </div>
            </div>

            {/* this is right side panel of the login page */}
            <div className="column-right col-sm-12 col-md-12 col-lg-6 ">
              <Form noValidate onSubmit={this.onSubmit} className="form-login">
                <Form.Group className="group-title-form" controlId="title">
                  <Form.Label className="title-form">Masuk</Form.Label>
                  <Form.Text className="subtitle-form">
                    Belum punya akun? <a href="/register">Daftar</a>
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

                <Form.Group controlId="password">
                  <Form.Label className="text-field">Password</Form.Label>
                  <div className="group-password">
                    <Form.Control
                      className="field-password" 
                      // className={classnames("", {
                        // invalid: errors.email || errors.emailnotfound
                      // })} 
                      type={isPasswordShown ? "text" : "password"} 
                      value={this.state.password}
                      error={errors.password}
                      onChange={this.onChange}
                    />
                    <i 
                      className="material-icons visibility"
                      onClick={this.tooglePasswordVisibility}
                    >{isPasswordShown ? "visibility" : "visibility_off"}
                    </i>
                  </div>
                  <div className="forget-wrapper">
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                    <Form.Text className="forget-password">
                      <a href="/forget-password">Lupa password?</a>
                    </Form.Text>
                  </div>
                </Form.Group>

                <Button className="button-form" variant="primary" type="submit">
                  Masuk
                </Button>
              </Form>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);