import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component{
    render(){
        return(
            <section className='nav'>
                <div className='appName'>
                     <Link to='/'><h2>Motion Logs</h2></Link>
                 </div>
                <div className='navLinks'>
                     <ul>
                         <li><Link to='/workouts'>Workouts</Link></li>
                         <li><Link to='/logs'>Logs</Link></li>
                         <li><Link to='/logIn'>Log in</Link></li>
                     </ul>
                </div>
            </section>
        );
    }
}

export default Nav;