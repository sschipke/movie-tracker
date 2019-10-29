import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom'
import { createNewUser, logInUser , getUserFavorites} from '../../util/apiCalls';
import {setUser, setFavorites} from '../../actions';
import './Login.css';

export class Login extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      password:'',
      isLoggedIn:false,
      error: '',
      logInError: false
    }
  }

  handleChange = (e) => {
    this.setState( { [e.target.name]:e.target.value } )
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.createUser()
    }
    


  createUser = async () => {
    const { name, email, password } = this.state;
    const user = {
      name,
      email,
      password
    }
    try {
      let newUser = await createNewUser(user)
      await this.props.setUser(newUser)
      this.setState({ isLoggedIn: true })
    } catch ({ message }) {
      this.setState({ error: message })
    }
  }

  logIn = async () => {
    const { email, password } = this.state;
    let user = { email, password }
    try {
      let currentUser = await logInUser(user);
      let userFavorites = await getUserFavorites(currentUser.id);
      await this.props.setFavorites(userFavorites)
      await this.props.setUser(currentUser)
      this.setState({isLoggedIn: true})
    } catch ({ message }) {
      this.setState({ error: message, logInError:true })
    }
  }

  render = () => {
    const {isLoggedIn, error, logInError} = this.state;
    let errClass = logInError ? 'error' : ''
    if(isLoggedIn) {
      return <Redirect to='/' />
    }
    return(
      <div className='login screen-cover'>
        <form className='login__form' onSubmit={this.handleSubmit}>

          <input 
            placeholder='Name' 
            name='name'
            maxLength='15'
            required 
            value={this.state.name}
            onChange={this.handleChange}/>

          <input 
          type='email'
            placeholder='Email' 
            className={errClass}
            name='email' 
            required
            value={this.state.email}
            onChange={this.handleChange}/>

          <input 
            type='password' 
            placeholder='Password' 
            className={errClass}
            name='password'
            maxLength='20'
            required 
            value={this.state.password}
            onChange={this.handleChange}/>
          <button type='submit'
          id='create-new'
          className='login__btn'
          >Create an account</button>
          <button type='button' className='login__btn'
            id='login'
            onClick={this.logIn}
            >Login</button>
            {error && <h3 className='error__login'>{error}</h3>}
        </form>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => bindActionCreators({setUser, setFavorites}, dispatch)


export default connect(null, mapDispatchToProps)(Login);