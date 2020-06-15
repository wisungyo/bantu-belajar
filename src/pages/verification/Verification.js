import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { bindActionCreators } from 'redux';
import './Verification.css';

class Verification extends Component {
  
  render(){ 
    const { user } = this.props.auth;

    return (
      <div className="Verification">
        <div className="Verification-card "> 
          <img src={require('../../assets/img/img_verifikasi-email.png')} alt="banner verification bantu belajar" />
          <p className="Verification-text">VERIFIKASI AKUN KAMU</p>
          <p className="Verification-description">
            Kami telah mengirimkan tautan verifikasi akun ke email kamu 
            <b> {user.email}</b>. Silahkan cek email kamu dan klik 
            link tautan yang kami kirimkan.
          </p>
        </div>
      </div>
  );
}
}


Verification.defaultProps = {
};

Verification.propTypes = {
  auth: PropTypes.object.isRequired
};

const matchDispatchToProps = (dispatch) => (bindActionCreators({
}, dispatch));

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, matchDispatchToProps)(Verification);


// Verification.propTypes = {
//   receiveRegister: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps, { receiveRegister })(Verification);