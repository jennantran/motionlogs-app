import React, { Component } from 'react';
import './Login.css';
import MotionsContext from '../MotionsContext';
import ValidationError from '../ValidationError';

class Login extends Component {
    static contextType = MotionsContext;

    constructor(props){
        super(props);
        this.state = {
            username: {
                value:'',
                touched: false
            },
            password: {
                value:'',
                touched:false
            },
        }
    }

    updateUsername(username) {
        this.setState({username: {value: username, touched: true}})
    }
        
    updatePassword(password) {
        this.setState({password: {value: password, touched: true}})
    }

    validateUsername() {
        const username = this.state.username.value.trim();
        if (username.length === 0) {
          return 'username is required';
        } else if (username.length < 3) {
          return 'Username must be at least 3 characters long';
        }
      }
    
    validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
          return 'Password is required';
        } else if (password.length < 6 || password.length > 72) {
          return 'Password must be between 6 and 72 characters long';
        } else if (!password.match(/[0-9]/)) {
          return 'Password must contain at least one number';
        }
      }
    handleSubmit = (e) => {
        e.preventDefault();
        // this.context.handlePostAuthenticate(this.state);
        // this.props.history.push('/logs');
        try { 
            this.context.handlePostAuthenticate(this.state); 
            this.props.history.push('/logs'); 
        } catch(error) {  
            throw new Error('invalid user and pw');
        }
    }
    render(){
        const userError = this.validateUsername();
        const passwordError = this.validatePassword();

        return(   
            <section className = 'loginFrom'>
                <form className='userForm' onSubmit={ e => this.handleSubmit(e)}>
                    <h2 className='log'>Log in</h2>
                    <label className='logEmail'>
                        Username:
                        <input
                            type='text'
                            className='loginInput'
                            name='user'
                            id='user'
                            onChange={e => this.updateUsername(e.target.value)}/>
                            {this.state.username.touched && <ValidationError message={userError} />}    
                    </label>
                    <label className='logPw'>
                        Password:
                        <input
                            type='password'
                            name='password'
                            id='password'
                            className='loginInput'
                            onChange={e => this.updatePassword(e.target.value)}/>
                                {this.state.password.touched &&
                                <ValidationError message={passwordError}/>}      
                    </label>
                    <input   
                        className='logSubmit'
                        type='submit' 
                        value='submit' />
                </form>
            </section>
        )
    }
}


export default Login;