import React, { Component } from 'react';
import './Workouts.css';


class Workouts extends Component{
    constructor(props){
        super(props);
        this.state = {
            results: []
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let sel = document.getElementById('muscle');
        let musVal = sel.value;
        const url = `https://wger.de/api/v2/exercise/?muscle=${musVal}`;

        return fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    results: json.results
                });
            })
            .catch(function(err){
                console.log('There was a fetch error');
            })
      }
    render(){
        return(
            <div>
                <h2 className='workoutsHeader'>Workouts</h2>
                <form className='searchBox'
                      onSubmit = { e => this.handleSubmit(e)}> 
                    <label className='workoutSearch'>
                            Filter workouts by muscle group: 
                            <select 
                                name='muscle' id='muscle'>
                            <option value='2' id='2'>Anterior Deltoid</option>
                            <option value='1' id='1'>Biceps Brachii</option>
                            <option value='11' id='11'>Biceps Femoris</option>
                            <option value='13' id='13'>Brachialis</option>
                            <option value='7' id='7'>Gastrocnemius</option>
                            <option value='8' id='8'>Gluteus Maximus</option>
                            <option value='12' id='12'>Latissimus Dorsi</option>
                            <option value='14' id='14'>Obliquus externus abdominis</option>
                            <option value='4' id='4'>Pectoralis Major</option>
                            <option value='10' id='10'>Quadriceps Femoris</option>
                            <option value='6' id='6'>Rectus Abdominis</option>
                            <option value='3' id='3'>Serratus Anterior</option>
                            <option value='15' id='15'>Soleus</option>
                            <option value='9' id='9'>Trapezius</option>
                            <option value='5' id='5'>Triceps Brachii</option>
                        </select>
                        </label>
                        <input   
                            className='logSubmit'
                            type='submit' 
                            value='submit' />
                </form>
            </div>
        );
    }
}

export default Workouts;