import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom'
import { createNewUser } from '../../util/apiCalls';
import {setNewUser} from '../../actions';
import './Login.css';

console.log('newUser',setNewUser)
class Login extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      password:'',
      isLoggedIn:false,
      logInError: ''
    }
  }

  handleChange = (e) => {
    this.setState( { [e.target.name]:e.target.value } )
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const {name, email, password} = this.state;
    const user = {
      name,
      email, 
      password
    }
    try {
      let newUser = await createNewUser(user)
      await this.props.setNewUser(newUser)
      this.setState({isLoggedIn: true})
    } catch({message}) {
      this.setState({logInError: message})
    }

    this.setState({
      name:'',
      email:'',
      password:''
    })
  }

  render = () => {
    if(this.state.isLoggedIn) {
      return <Redirect to='/' />
    }
    return(
      <div className='login screen-cover'>
        <form className='login__form' onSubmit={this.handleSubmit}>

          <input 
            placeholder='User' 
            name='name' 
            value={this.state.name}
            onChange={this.handleChange}/>

          <input 
          type='email'
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

          <button type='submit' className='login__btn'>Login</button>
        </form>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({setNewUser}, dispatch)


export default connect(null, mapDispatchToProps)(Login);