import React, { Component } from 'react';
import './AddLogs.css';


class AddLogs extends Component{
    render(){
        return(
            <div className='addLog'>
                <h2>Log New Entry</h2>
                    <form className='addLogForm'>
                        <label>Workout Name</label> 
                        <div>
                            <input 
                                type='text'
                                name='workoutName'
                                placeholder='workout name'
                            ></input>
                            <label>Set:
                                <select name='sets' id='sets'>
                                    <option value ='1'>1</option>
                                    <option value ='2'>2</option>
                                    <option value ='3'>3</option>
                                    <option value ='4'>4</option>
                                    <option value ='5'>5</option>
                                </select>
                            </label> 
                            <label>Reps:
                                <select name='reps' id='reps'>
                                    <option value ='3'>3</option>
                                    <option value ='5'>5</option>
                                    <option value ='10'>10</option>
                                    <option value ='15'>15</option>
                                    <option value ='20'>20</option>
                                </select>
                            </label> 
                            <label>Weight</label> 
                            <input 
                                type='text'
                                name='weight'
                                placeholder='weight lbs'
                            ></input>
                        </div>
                        <div>
                            <input 
                                type='text'
                                name='workoutName'
                                placeholder='workout name'
                            ></input>
                            <label>Set:
                                <select name='sets' id='sets'>
                                    <option value ='1'>1</option>
                                    <option value ='2'>2</option>
                                    <option value ='3'>3</option>
                                    <option value ='4'>4</option>
                                    <option value ='5'>5</option>
                                </select>
                            </label> 
                            <label>Reps:
                                <select name='reps' id='reps'>
                                    <option value ='3'>3</option>
                                    <option value ='5'>5</option>
                                    <option value ='10'>10</option>
                                    <option value ='15'>15</option>
                                    <option value ='20'>20</option>
                                </select>
                            </label> 
                            <label>Weight</label> 
                            <input 
                                type='text'
                                name='weight'
                                placeholder='weight lbs'
                            ></input>
                        </div>
                        <div>
                            <input 
                                type='text'
                                name='workoutName'
                                placeholder='workout name'
                            ></input>
                            <label className='logLabel'>Set:
                                <select name='sets' id='sets'>
                                    <option value ='1'>1</option>
                                    <option value ='2'>2</option>
                                    <option value ='3'>3</option>
                                    <option value ='4'>4</option>
                                    <option value ='5'>5</option>
                                </select>
                            </label> 
                            <label className='logLabel'>Reps:
                                <select name='reps' id='reps'>
                                    <option value ='3'>3</option>
                                    <option value ='5'>5</option>
                                    <option value ='10'>10</option>
                                    <option value ='15'>15</option>
                                    <option value ='20'>20</option>
                                </select>
                            </label> 
                            <label className='logLabel'>Weight</label> 
                            <input 
                                type='text'
                                name='weight'
                                placeholder='weight lbs'
                            ></input>
                        </div>
                        <div className="addLogButton">
                            <button>Cancel</button>
                            <button type="submit" >Save</button>
                        </div> 
                    </form>
            </div>
        );
    }
}

export default AddLogs;