import React, { Component } from 'react';
import './Workouts.css';


class Workouts extends Component{
    render(){
        return(
            <div>
                <h2 className='workoutsHeader'>Workouts</h2>
                <form>
                    <label className='workoutSearch'>
                            Look up workouts:
                            <input
                                type='text'
                                >
                            </input>
                        </label>
                </form>
            </div>
        );
    }
}

export default Workouts;