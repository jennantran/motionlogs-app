import React, { Component } from 'react';
import './Workouts.css';
import Workout from '../Workout/Workout';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


class Workouts extends Component{
    constructor(props){
        super(props);
        this.state = {
            results: [],
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let query = document.getElementById('queryInput').value;
        query = {'query': query};
        const url = `https://trackapi.nutritionix.com/v2/natural/exercise`;
             
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(query),
            headers:{
                'Content-Type':'application/json',
                'x-app-id':'d9893fb0',
                'x-app-key':'81e3af2d37c0786edf8fb767699bce1b',       
            },
        })

            .then(res => res.json())
            .then(data=> {
                this.setState({
                    results: data.exercises
                });
            })
            .catch(function(err){
                throw new Error('There was a fetch error');
            })
      }
    render(){
            let results = this.state.results;
            const calories = results.map((caloriesItem) =>{
                return <section>
                            <p>{caloriesItem.nf_calories}</p>
                      </section>
            })
            
        return(
            <div>
                <h2 className='workoutsHeader'>Calories Burned</h2>
                <form className='searchBox'
                      onSubmit = { e => this.handleSubmit(e)}> 
                    <label className='workoutSearch'
                           >
                            Enter your workout: 
                         
                        </label>
                        <input id='queryInput'
                            placeholder='ex: run 10 miles...'></input>
                        <input   
                            className='logSubmit'
                            type='submit' 
                            value='calculate' />
                </form>
                <section id='results'>
                    <h2 id='resultsTitle'>Results</h2>
                        {calories} <p>calories</p>
                </section>
            </div>
        );
    }
}

export default Workouts;