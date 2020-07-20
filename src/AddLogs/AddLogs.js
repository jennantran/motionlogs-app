import React, { Component } from 'react';
import './AddLogs.css';
import MotionsContext from '../MotionsContext';
import config from '../config';
import Logs from '../Logs/Logs';


class AddLogs extends Component{
    static contextType = MotionsContext;

    state = {
        error: null,
        logs:this.context.logs
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, set, rep, weight } = e.target;
        let tempLogs = this.state.logs;
        console.log(e.target);
        console.log(weight);
        console.log(name);
        const log = {
            name: name.value,
            set: set.value,
            rep: rep.value,
            weight: weight.value,
            id: tempLogs.length-1,
        }

        tempLogs.push(log);
        console.log(tempLogs);
        
        this.setState({
            logs: tempLogs
        })


    // this.setState({ error: null })
    //      fetch(`https://cors-anywhere.herokuapp.com/${config.API_ENDPOINT}`, {
    //           method: 'POST',
    //           body: JSON.stringify(log),
    //           headers: {
    //             'content-type': 'application/json',
    //          }
    //      })
    //    .then(res => {
    //         if(!res.ok){
    //              return res.json().then(error => {
    //                  throw error;
      
    //             })
    //          }
    //         return res.json();
    //      })
    //     .then(data => {
    //          name.value = ''
    //          set.value = ''
    //          rep.value = ''
    //          weight.value = ''
    //          this.context.addLog(data)
    //         this.props.history.push('/')
    //      })
    //      .catch(error => {
    //         this.setState({ error })
    //    })
    }
    render(){
        const { error } = this.state;
        return(
            <div className='addLog'>
                <h2>Log New Entry</h2>
                    <form className='addLogForm'
                          onSubmit={this.handleSubmit}>
                        <div className='addError'>{error && <p>{error.message}</p>}</div>
                        <label>Workout Name</label> 
                        {''}
                        <div>
                            <input 
                                type='text'
                                name='name'
                                placeholder='workout name'
                            ></input>
                            <label>Set:
                                <select name='set' id='set'>
                                    <option value ='1'>1</option>
                                    <option value ='2'>2</option>
                                    <option value ='3'>3</option>
                                    <option value ='4'>4</option>
                                    <option value ='5'>5</option>
                                </select>
                            </label> 
                            <label>Reps:
                                <select name='rep' id='rep'>
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