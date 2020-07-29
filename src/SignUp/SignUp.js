import React, { Component } from 'react';
import './SignUp.css';
import MotionsContext from '../MotionsContext';

class SignUp extends Component {
    static contextType = MotionsContext;
        constructor(props){
        
        }
    render(){
        return(
            <section>
                <form> 
                    <h2 className='signUp'>Sign Up</h2>
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


export default SignUp;