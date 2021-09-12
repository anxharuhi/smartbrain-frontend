import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import TextLogo from '../TextLogo/TextLogo';
import './register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpName: '',
      signUpEmail: '',
      signUpPassword: '',
      signUpConfirmation: '',
    }
  }

  onNameChange = event => {
    this.setState({signUpName: event.target.value});
  }

  onEmailChange = event => {
    this.setState({signUpEmail: event.target.value});
  }

  onPasswordChange = event => {
    this.setState({signUpPassword: event.target.value});
  }

  onConfirmationChange = event => {
    this.setState({signUpPassword: event.target.value});
  }

  onSubmitRegister = event => {
    event.preventDefault();
    if(this.signUpPassword === this.signUpConfirmation) {
      const { server } = this.props;
      let result = fetch(server + '/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.signUpName,
          email: this.state.signUpEmail,
          password: this.state.signUpPassword,
        })
      })
      result.then(success => success.json())
        .then(data => {
          if(data) {
            console.log(data)
          } else{
            console.log('Unexpected error')
          }
        })
    }
    this.props.onRouteChange('signin');
  }

  render() {
    const { onRouteChange } = this.props ;
    return(
      <div className="h-100 flex justify-center">
        <div className="flex items-center">
          <div className="flex flex-column items-center ph3 pv4 ba br2 bw1 background-box">
            <div className="flex items-center mh2 mb2">
              <Logo size="small" />
              <div className="ml3-5"></div>
              <TextLogo />
            </div>
            <form>
              <fieldset className="bw0" id="sign_up">
                <div>
                  <label className="db lh-copy f6">Name</label>
                  <input type='text' placeholder='Name'
                    className='f5 pa2 bg-white-transparent br1 ba bw0 shadow-1'
                    onChange={this.onNameChange}
                  />
                </div>
                <div>
                  <label className="db lh-copy f6">E-mail adress</label>
                  <input type='text' placeholder='E-mail'
                    className='f5 pa2 bg-white-transparent br1 ba bw0 shadow-1'
                    onChange={this.onEmailChange}
                  />
                </div>
                <div>
                  <label className="db lh-copy f6 mt2">Password</label>
                  <input type='password' placeholder='Password'
                    className='f5 pa2 bg-white-transparent br1 ba bw0 shadow-1'
                    onChange={this.onPasswordChange}
                  />
                </div>
                <div>
                  <label className="db lh-copy f6 mt2">Repeat Password</label>
                  <input type='password' placeholder='Password'
                    className='f5 pa2 bg-white-transparent br1 ba bw0 shadow-1'
                    onChange={this.onConfirmationChange}
                  />
                </div>
                {/* Make "Remember me" checkbox */}
                <div className="flex items-center justify-between mt4">
                  <input type="submit" value="Register"
                    onClick={this.onSubmitRegister}
                    className='f5 w-40 w-30-ns grow ph1 pv2 dib bg-white-transparent br1 bw0'
                  />
                  <div className="db tr">
                    <span className="db lh-copy f6 link dim black pointer" onClick={() => onRouteChange('signin')}>Sign in</span>
                  </div>
                </div>
              </fieldset>
              </form>
          </div>
        </div>
      </div>
    )}
}

export default Register;
