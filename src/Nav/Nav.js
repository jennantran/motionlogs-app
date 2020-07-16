import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <section className='nav'>
                <div>
                     <Link to='/'><h2>Motion Logs</h2></Link>
                     <ul>
                         <li>Workouts</li>
                         <li>Logs</li>
                         <li>Log in</li>
                     </ul>
                </div>
            </section>
        );
    }
}

export default Nav;