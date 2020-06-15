import React, { Component } from 'react';
// import VerticallyCenteredModal from './VerticallyCenteredModal';

// importing react bootstrap components
import { Image } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

// importing image for this page
import Logo from '../../assets/img/logo.svg';

// importing the css for this page
import './style-new-password.css';

class Forget extends Component {
  // stating password visibility value
  state = {
    isPasswordShown: false
  };

  // toggle password visibility
  tooglePasswordVisibility = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };
  
  render = () => {
    const { isPasswordShown } = this.state;

    // const [modalShow, setModalShow] = useState(false);

    return(
      <>
        <div className="wrapper-forget">
          <Image 
            className="logo-forget"
            src={Logo}
            alt="Bantu Belajar"
          />

          <div className="form-forget">
            <Form.Group className="group-title-form" controlId="formBasicTitle">
              <Form.Label className="title-form">
                Masukkan Password Baru Anda
              </Form.Label>
            </Form.Group>

            <Form.Group className="group-email" controlId="formBasicEmail">
              <Form.Label className="text-field">Password Baru</Form.Label>
              <div className="group-password">
                <Form.Control 
                  className="field-email" 
                  type={isPasswordShown ? "text" : "password"} 
                />
                <i 
                  className="material-icons visibility"
                  onClick={this.tooglePasswordVisibility}
                  >{isPasswordShown ? "visibility" : "visibility_off"}
                </i>
              </div>
            </Form.Group>

            <Form.Group className="group-email" controlId="formBasicEmail">
              <Form.Label className="text-field">Konfirmasi Password Baru</Form.Label>
              <div className="group-password">  
                <Form.Control 
                  className="field-email" 
                  type={isPasswordShown ? "text" : "password"} 
                />
                <i 
                  className="material-icons visibility"
                  onClick={this.tooglePasswordVisibility}
                  >{isPasswordShown ? "visibility" : "visibility_off"}
                </i>
              </div>
            </Form.Group>

            <Button 
              className="button-form" 
              variant="primary" 
              type="submit"
              // onClick={() => setModalShow(true)}
            >
                Ubah Password
            </Button>

            <Form.Group className="group-title-form" controlId="formBasicTitle">
              <Form.Text className="footer-subtitle-form">
                Kembali ke <a href="/">Masuk</a> atau <a href="/">Daftar</a>
              </Form.Text>
            </Form.Group>

            {/* <VerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            /> */}

          </div>
        </div>
      </>
    );
  }
}

export default Forget;