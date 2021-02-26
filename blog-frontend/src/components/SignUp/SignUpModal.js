import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Alert, Row, Col } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL } from '../../constants';
import fbLogo from '../../images/fb-logo.png';
import googleLogo from '../../images/google-logo.png';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class SignUpModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loginError: false
    };
  }

  handleSubmit = (event, errors, { username, password, rememberMe }) => {
    const { handleSignup } = this.props;
    handleSignup(username, password, rememberMe);
  };

  render() {
    const { loginError, handleClose, showModal } = this.props;

    return (
      <Modal isOpen={showModal} toggle={handleClose} >
        <AvForm onSubmit={this.handleSubmit}>
          <ModalHeader id="login-title" toggle={handleClose}>
            Register
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col md="12">
                {loginError ? (
                  <Alert color="danger">
                    <strong>Failed to sign in!</strong> Please check your credentials and try again.
                  </Alert>
                ) : null}
              </Col>
              <Col md="12">
                <AvField
                  name="name"
                  label="Name"
                  placeholder="Your name"
                  required
                  errorMessage="name cannot be empty!"
                  autoFocus
                />
                <AvField
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Your password"
                  required
                  errorMessage="Password cannot be empty!"
                />
                <AvField
                  name="email"
                  label="email"
                  placeholder="Your email"
                  required
                  errorMessage="email cannot be empty!"
                  autoFocus
                />
              </Col>
            </Row>
            <div className="mt-1">&nbsp;</div>
            <div className="login-container">
              <SocialLogin />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={handleClose} tabIndex="1">
              Cancel
            </Button>{' '}
            <Button color="primary" type="submit">
              Sign in
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>
    );
  }
}

class SocialLogin extends Component {
  render() {
    return (
      <div className="social-login">
        <Button block color="link" className={cx("google")} href={GOOGLE_AUTH_URL}>
          <img src={googleLogo} alt="Google" /> Log in with Google
        </Button>
      </div>
    );
  }
}

export default SignUpModal;
