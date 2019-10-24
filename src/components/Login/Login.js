import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom'
import { createNewUser, logInUser } from '../../util/apiCalls';
import {setUser} from '../../actions';
import './Login.css';

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
      await this.props.setUser(newUser)
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

  logIn = async () => {
    const { email, password } = this.state;
    let user = { email, password }
    console.log(user)
    try {
      let currentUser = await logInUser(user);
      await this.props.setUser(currentUser)
      this.setState({isLoggedIn: true})
    } catch ({ message }) {
      this.setState({ logInError: message })
    }
  }

  render = () => {
    const {isLoggedIn, logInError} = this.state;
    if(isLoggedIn) {
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
            required
            value={this.state.email}
            onChange={this.handleChange}/>

          <input 
            type='password' 
            placeholder='password' 
            name='password'
            required 
            value={this.state.password}
            onChange={this.handleChange}/>
          {logInError && <h3 className='error__login'>{logInError}</h3>}
          <button type='submit' className='login__btn'
            >Create new user</button>
        </form>
          <button type='button' className='login__btn'
          onClick={this.logIn}>Login</button>
          

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({setUser}, dispatch)


export default connect(null, mapDispatchToProps)(Login);