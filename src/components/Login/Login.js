import React,{ Component } from 'react';


class Login extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      password:''
    }
  }

  render = () => {
    return(
      'Login'
    )
  }


}

export default Login;