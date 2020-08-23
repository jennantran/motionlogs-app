import React, { Component } from 'react';
import './AddLogs.css';
import MotionsContext from '../MotionsContext';
import API_ENDPOINT from '../config';


class AddLogs extends Component{
    static contextType = MotionsContext;

    constructor(props){
        super(props);
        this.state =  { 
            wout_name:{
                value:'',
                touched:''
            },
            set: {
                value:'2',
                touched:''
            },
            rep: {
                value:'5',
                touched:''
            },
            weight:{
                value:'',
                touched:''
            },
            data_added: {
                value:'',
                touched:''
            }
         }
    }
    updateName(name){
        console.log({name});
        this.setState({
            wout_name: {
                value: name,
                touched: true
            }
        });
    }
    updateSet(set){
        console.log({set});
        this.setState({
            set: {
                value: set,
                touched: true
            }
        });
    }
    updateWeight(weight){
        console.log({weight});
        this.setState({
            weight: {
                value: weight,
                touched: true
            }
        });
    }
    updateRep(rep){
        console.log({rep});
        this.setState({
            rep: {
                value: rep,
                touched: true
            }
        });
    }
    handleSubmit(e){
        e.preventDefault();
   
        const newLog = {
            wout_name: this.state.wout_name.value,
            set: this.state.set.value,
            rep: this.state.rep.value,
            weight: this.state.weight.value,
            user_id: this.context.user_id,
            date_added: new Date()
        };
        
        fetch(`${API_ENDPOINT.API_ENDPOINT}/logs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newLog)
        })
        .then((res)=> {
            console.log(res);
            if(!res.ok){
                return res.json().then(e => Promise.reject(e));
            }
            return res.json();
        })
        .then((data)=> {

            this.context.addLog(data);
            console.log(data);
            this.props.history.push('/logs');
        })  
        .catch((error) => {
            console.log(error.message);
        })
    };

   
    render(){
        const { error } = this.state;
        return(
            <div className='addLog'>
                <h2>Log New Entry</h2>
                    <form className='addLogForm'
                          onSubmit={e => this.handleSubmit(e)}>
                        <div className='addError'>{error && <p>{error.message}</p>}</div>
                        <label>Workout Name</label> 
                        {this.state.wout_name.touched}
                        <div className='newEntry'>
                            <input 
                                required
                                type='text'
                                name='name'
                                placeholder='workout name'
                                onChange = {e => this.updateName(e.target.value)}
                            ></input>
                            <label className='addLabel'>Set
                                <select name='set' 
                                        value = {this.state.set.value}
                                        id='set'
                                        onChange = {e => this.updateSet(e.target.value)}>
                                    <option value ='1'>1</option>
                                    <option value ='2'>2</option>
                                    <option value ='3'>3</option>
                                    <option value ='4'>4</option>
                                    <option value ='5'>5</option>
                                </select>
                            </label> 
                            <label className='addLabel'>Reps
                                <select name='rep' 
                                        id='rep'
                                        value = {this.state.rep.value}
                                        onChange = {e => this.updateRep(e.target.value)}>>
                                    <option value ='3'>3</option>
                                    <option value ='5'>5</option>
                                    <option value ='10'>10</option>
                                    <option value ='15'>15</option>
                                    <option value ='20'>20</option>
                                </select>
                            </label> 
                            <label>Weight</label> 
                            <input 
                                required
                                type='text'
                                name='weight'
                                placeholder='weight lbs'
                                onChange = {e => this.updateWeight(e.target.value)}
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