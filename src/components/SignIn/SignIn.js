import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import TextLogo from '../TextLogo/TextLogo';
import './signin.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value});
  }

  onSubmitSignIn = (event) => {
    event.preventDefault();
    const { server } = this.props;
    let result = fetch(server + '/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      })
    })
    result.then(success => success.json())
      .then(user => {
        if(user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
    // this.props.onRouteChange('home');
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
            <fieldset className="bw0" id="sign_in">
              {/* <legend className="f4 fw6 pt3 mb1 ph0 mh0 bb">Sign In</legend> */}
              <div>
                <label className="db lh-copy f6">E-mail</label>
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
              {/* Make "Remember me" checkbox */}
              <div className="flex items-center justify-between mt4">
                <input type="submit" value="Sign in" onClick={this.onSubmitSignIn}
                  className='f5 w-40 w-30-ns grow ph1 pv2 dib bg-white-transparent br1 bw0'
                />
                <div className="db tr">
                  <span href="#0" className="db lh-copy f6 link dim black pointer" onClick={() => onRouteChange('signup')}>Sign up</span>
                  <a href="#0" className="db lh-copy f6 link dim black">Forgotten password?</a>
                </div>
              </div>
            </fieldset>
            </form>
        </div>
      </div>
    </div>
  )}
}

export default SignIn;
