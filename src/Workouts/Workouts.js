import React, { Component } from 'react';
import './Workouts.css';
import Workout from '../Workout/Workout';


class Workouts extends Component{
    constructor(props){
        super(props);
        this.state = {
            results: []
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('was submitted');
        let query = document.getElementById('queryInput').value;
        console.log(query);
        query = query.trim().replace(/\s/g, '%20')
        console.log(query);
        const url = `https://trackapi.nutritionix.com/v2/natural/exercise?${query}`;
        
        console.log(url);
     
        return fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                'x-app-id':'d9893fb0',
                'x-app-key':'81e3af2d37c0786edf8fb767699bce1b'
            },
        })

            .then(res => res.json())
            .then(data=> {
                console.log(data);
                this.setState({
                    results: data
                });
                console.log(data);
            })
            .catch(function(err){
                console.log('There was a fetch error');
            })
      }
    render(){
            results = this.state.results;
        return(
            <div>
                <h2 className='workoutsHeader'>Calories Burned</h2>
                <form className='searchBox'
                      onSubmit = { e => this.handleSubmit(e)}> 
                    <label className='workoutSearch'>
                            Enter your workout: 
                          <input id='queryInput'></input>
                        </label>
                        <input   
                            className='logSubmit'
                            type='submit' 
                            value='calculate exercise' />
                </form>
                <section id='results'>
                    <h2 id='resultsTitle'>Results</h2>
                            {results}
                </section>
            </div>
        );
    }
}

export default Workouts;