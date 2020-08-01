import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MotionsContext from '../MotionsContext';
import TokenService from '../services/token-service';
import './Nav.css';

class Nav extends Component{
    static contextType = MotionsContext;
        constructor(props){
        super(props);
        this.state = {
            authToken: undefined,
        }
    }
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        this.setState({authToken: undefined});
        this.context.clearLogs();    
    }
  
    renderLogoutLink() {
      return (
          <li className='loggedIn'>
            <Link
              onClick={this.handleLogoutClick}
              to='/login'>
              Logout
            </Link>
          </li> 
        )
    }
  
    renderLoginLink() {
      return (
        <li className='notLogged-in'>
          <Link
            to='/login'>
            Log in
          </Link>
        </li>
      )
    }
    render(){
        return(
            <section className='nav'>
                <div className='appName'>
                     <Link to='/'><h2>Motion Logs</h2></Link>
                 </div>
                <div className='navLinks'>
                     <ul>
                         <li><Link to='/workouts'>Workouts</Link></li>
                         {TokenService.hasAuthToken()
                          ? <li><Link id='logs' to='/logs'>Logs</Link></li>
                          : null}
                          {TokenService.hasAuthToken()
                          ? this.renderLogoutLink()
                          : this.renderLoginLink()}
                     </ul>
                </div>
            </section>
        );
    }
}

export default Nav;