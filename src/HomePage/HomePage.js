import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import './HomePage.css';

class HomePage extends Component{
    handleClick = (e) => {
        this.props.history.push('/signup');
    }
    render(){
        return(
            <div>
                <section className='homepage'>
                    <h1 className='homeHeader'>Make your fitness journey EASIER!</h1>
                    <p>Track your progress.</p>
                    <button 
                        className='homeButton' 
                        onClick={e => this.handleClick(e)}>Join now</button>
                </section>
                <section className='homepgDetails'>
                    <div className='details design'>
                        <h2>Simple.</h2>
                        <p>Log your reps and weights and add the workout name.</p>
                    </div>
                    <div className='details learn'>
                        <h2>Track.</h2>
                        <p>See the amount of calories expended from your workout using the input calculator.</p>
                    </div>
                    <div className='details accountability'>
                        <h2>Accountability.</h2>
                        <p>As your numbers go up, motivation will come.</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(HomePage);