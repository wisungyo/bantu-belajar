import React, { Component } from 'react';
import './Register.css';
import { Link }  from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions"

class Register extends Component {

    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
            isPasswordShown:false,
            isPasswordConfShown:false,
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        };
        
        this.props.registerUser(newUser, this.props.history);
    };

    togglePasswordVisibility = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown});
    }

    togglePasswordConfVisibility = () => {
        const { isPasswordConfShown } = this.state;
        this.setState({ isPasswordConfShown: !isPasswordConfShown});
    }

    render() {
        const { errors, isPasswordShown, isPasswordConfShown} = this.state;
        
        let hidePass, hidePassConf;
        if(isPasswordShown) {
            hidePass = <FontAwesomeIcon icon={ faEye }  />;
        } else{
            hidePass = <FontAwesomeIcon icon={faEyeSlash} />;
        }

        if (isPasswordConfShown) {
            hidePassConf = <FontAwesomeIcon icon={ faEye }  />;
        } else{
            hidePassConf = <FontAwesomeIcon icon={faEyeSlash} />;
        }
        return (
            <div className="Register-page">
                <a href="/">
                    <img className="Register-logo" src={require('../../assets/img/logo.png')}  alt="Logo Donasi Bantu Belajar" />
                </a>
                
                <div className="Register-card">
                    <div className="Register-banner">
                        <img src={require('../../assets/img/banner.png')} alt="Banner Donasi Bantu Belajar" />
                        <p className="Register-donate-tagline">Donasi Mudah di Bantu Belajar</p>
                        <p className="Register-donate-description">Tingkatkan literasi masyarakat Indonesia </p>
                    </div>
                    <div className="Register-form">
                        <p className="Register-text1">Daftar Sekarang</p>
                        <p className="Register-text2">Sudah punya akun ? 
                        <Link to="/login"> Masuk</Link>
                            </p>

                            <a href=""></a>
                        
                        <form onSubmit={this.onSubmit}>
                            <div className="Register-name-input">
                                <div className="Form-registrasi Register-name">
                                    <label>Nama Depan</label>
                                    <input onChange={this.onChange}
                                        value={this.state.firstname}
                                        error={errors.firstname}
                                        id="firstname"
                                        type="text" required />
                                    <p className="Register-error">{errors.firstname}</p>
                                </div>
                                <div className="Form-registrasi">
                                    <label>Nama Belakang</label>
                                    <input onChange={this.onChange}
                                        value={this.state.lastname}
                                        error={errors.lastname}
                                        id="lastname"
                                        type="text" required />
                                    <p className="Register-error">{errors.lastname}</p>
                                </div>
                            </div>
                            <div className="Form-registrasi">
                                <label>Email</label>
                                <input onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email" required/>
                                <p className="Register-error">{errors.email}</p>
                            </div>
                            <div className="Form-registrasi">
                                <label>Password</label>
                                <input onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type={(isPasswordShown) ? "text" : "password"} required/> 
                                <i onClick={this.togglePasswordVisibility}><span className="Register-hidePassword">{ hidePass } </span></i> 
                                <p className="Register-error">{errors.password}</p>
                            </div>
                            <div className="Form-registrasi">
                                <label>Konfirmasi Password</label>
                                <input onChange={this.onChange}
                                    value={this.state.confirmPassword}
                                    error={errors.confirmPassword}
                                    id="confirmPassword"
                                    type={(isPasswordConfShown) ? "text" : "password"} required/> 
                                <i  onClick={this.togglePasswordConfVisibility}><span className="Register-hidePassword">{ hidePassConf }</span></i> 
                                <p className="Register-error">{errors.confirmPassword}</p>
                            </div>

                            <button type="submit" className="Register-submit-btn">Daftar</button>
                        </form>
                        <p className="Register-FooterText">Dengan mendaftar, Anda setuju dengan
                        <br></br> <Link className="Register-FooterLink" to="/syarat-ketentuan">Syarat & Ketentuan</Link> dan <Link className="Register-FooterLink" to="/syarat-ketentuan">Kebijakan Privasi</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}


Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,  { registerUser } )(Register);