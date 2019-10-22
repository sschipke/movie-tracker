import React,{ Component } from 'react';
import './Login.css'

class Login extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      password:''
    }
  }

  handleChange = (e) => {
    this.setState( { [e.target.name]:e.target.value } )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      name:'',
      email:'',
      password:''
    })
  }

  render = () => {
    return(
      <div className='login screen-cover'>
        <form className='login__form' onSubmit={this.handleSubmit}>

          <input 
            placeholder='User' 
            name='name' 
            value={this.state.name}
            onChange={this.handleChange}/>

          <input 
            placeholder='email' 
            name='email' 
            value={this.state.email}
            onChange={this.handleChange}/>

          <input 
            type='password' 
            placeholder='password' 
            name='password' 
            value={this.state.password}
            onChange={this.handleChange}/>

          <button className='login__btn'>Login</button>
        </form>

      </div>
    )
  }


}

export default Login;