import React, { Component } from 'react';
import './SignUp.css';
import MotionsContext from '../MotionsContext';
import ValidationError from '../ValidationError';

class SignUp extends Component {
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
    handleRegistrationRedirect = () => {
        const { history } = this.props;
        history.push('/login');
    }

    updateUsername(username){
        this.setState({
            username: {
                value: username,
                touched: true
            }
        })
    }
    updatePassword(password){
        this.setState({
            password:{
                value: password,
                touched: true
            }
        })
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
        const { username, password } = this.state;
        const newUser = { username, password };
        this.context.addUser(newUser);
        this.handleRegistrationRedirect();
        }

    handleVerify = (e) => {
        if(!this.state.username.value || !this.state.password.value){
            alert('Invalid username or password');
        }else{
            alert('Account created successfuly');
            return this.handleSubmit(e);
        }
    }
        
    render(){
        const userError = this.validateUsername();
        const passwordError = this.validatePassword();
        return(
            <section>
                <form className='signupForm'
                        onSubmit={e => this.handleVerify(e)}> 
                    <h2 className='signUp'>Sign Up</h2>
                    <label className='logEmail'>
                        Email:
                        <input
                            type='text'
                            className='loginInput'
                            name='user'
                            id='user'
                            onChange={e => this.updateUsername(e.target.value)}       
                           />
                        {this.state.username.touched && <ValidationError message={userError}/>}
                    </label>
                    <label className='logPw'>
                        Password:
                        <input
                            type='password'
                            name='password'
                            className='loginInput'     
                            id='password'
                            onChange = { e => this.updatePassword(e.target.value)}   
                            />
                       {this.state.password.touched && <ValidationError message={passwordError} /> }
                    </label>
                    <input   
                        className='logSubmit'
                        type='submit' 
                        value='submit' />
                </form>        
            </section>
        );
    }
}


export default SignUp;