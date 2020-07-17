import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render(){
        return(
            <section>
                <form> 
                    <h2 className='log'>Log in</h2>
                    <label className='logEmail'>
                        Email:
                        <input
                            type='text'
                            className='loginInput'
                            
                            >
                        </input>
                    </label>
                    <label className='logPw'>
                        Password:
                        <input
                            type='text'
                            className='loginInput'
                            
                            >
                        </input>
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


export default Login;