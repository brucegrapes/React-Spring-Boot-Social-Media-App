import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Redirect } from 'react-router-dom';
import * as authActions from "store/modules/auth";
import LoginModal from '../components/SignUp/SignUpModal';
import SignUpModal from '../components/SignUp/SignUpModal';

class SignUpContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({ showModal: this.props.showModal });
    }
  }

  handleSignUp = async (username, password, email) => {
    const { AuthActions } = this.props;
    try {
      await AuthActions.Register(username, password);      
    } catch (e) {
      console.log("error log :" + e);
    }
  }; 

  handleClose = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  render() {
    const { location, isAuthenticated } = this.props;
    const { showModal } = this.state;
    const { from } = location.state || { from: { pathname: '/', search: location.search } };

    if (isAuthenticated) {
       return <Redirect to={from} />;
    }
    return (  
      <SignUpModal showModal={!showModal} handleSignUp={this.handleSignUp} handleClose={this.handleClose} SignUpError={this.props.SignUpError} />
    );
  }
}

export default connect(
  state => ({
    loading: state.pender.pending["auth/LOGIN"],
    loginError: state.pender.failure["auth/LOGIN"],
    isAuthenticated: state.auth.get("isAuthenticated")
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(SignUpContainer);

