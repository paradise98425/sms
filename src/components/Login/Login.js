import React, { Component } from 'react';
import './Login.css';
import {SuperadminLogin} from '../.././Services/SuperadminLogin';
import {Redirect} from 'react-router-dom';


class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      errormessage:'',
      direct: false
    }
    this.login = this.login.bind(this)
    this.onChange = this.onChange.bind(this);
  }
  
  
  //*************************************************************************/
   //     Function for sending the username and password to the endpoints 
  //************************************************************************* */

  login(event){
    event.preventDefault();
    SuperadminLogin('SuperadminLogin', this.state)
    .then (
      (result) => {
          let responseJSON = result;
          if(responseJSON.access){
            //console.log('you are now logged in ')
              localStorage.setItem('access', responseJSON.access)
              localStorage.setItem('refresh', responseJSON.refresh)
              this.setState({redirect: true});     
          }
          else{
            this.setState({errormessage: 'provided credintials does not match with our record'});
          }
      });
  }

  //*************************************************************************/
   //     Function for setting the state username and password as typed 
   //     in the form feild by the user
  //************************************************************************* */

  onChange(e){
      this.setState({[e.target.name]:e.target.value});
  }

  //*************************************************************************/
   //                      Returning the JSX code 
  //************************************************************************* */


  render() {

    if(this.state.redirect){
      return(
          <Redirect to={'/Home'}></Redirect>        
      )
    }

    return (
      <div className="app">
        <div className="sufee-login d-flex align-content-center flex-wrap">
          <div className="container">
            <div className="login-content">
                <div className="login-logo">
                    <a href="">
                        <img className="align-content" src={require('.././images/logo.png')} alt="" />
                    </a>
                </div>
                <div className="login-form" >
                    <form>
                        <div className="form-group">
                            <label>Username </label>
                            <input type="username" name="username" className="form-control" placeholder="Username" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.onChange}/>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" /> Remember Me
                            </label>
                            <label className="pull-right">
                                <a href="mitra.cash">Forgotten Password?</a>
                            </label>

                        </div>
                        <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30" onClick={this.login}>Sign in</button>
                        <div className="register-link m-t-15 text-center">
                            <p>Don't have account ? <a href="mitra.cash"> Sign Up Here</a></p>
                        </div>
                    </form>
                </div>
          </div>
        </div>
    </div>
      </div>
    );
  }
}

export default Login;
