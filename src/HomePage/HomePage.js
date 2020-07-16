import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component{
    render(){
        return(
            <div>
                <section className='homepage'>
                    <h1 className='homeHeader'>Make your fitness journey EASIER!</h1>
                    <p>Track your progress.</p>
                    <button className='homeButton'>Join now</button>
                </section>
                <section className='homepgDetails'>
                    <div className='details design'>
                        <h2>Simple.</h2>
                        <p>Log your reps and weights.</p>
                    </div>
                    <div className='details learn'>
                        <h2>Learn.</h2>
                        <p>Search for new workouts and incorporte it into your routine.</p>
                    </div>
                    <div className='details accountability'>
                        <h2>Accountability.</h2>
                        <p>This app encourages you to get stronger as your numbers go up.</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePage;