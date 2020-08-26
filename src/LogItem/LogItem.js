import React, { Component } from 'react';
import './LogItem.css';
import MotionsContext from '../MotionsContext';
import TokenService from '../services/token-service';
import { format } from 'date-fns';
import API_ENDPOINT from '../config';

class LogItem extends Component{
    static contextType = MotionsContext;
  
    state = {
        logs: this.context.logs
    }

    handleDelete = e => {
        e.preventDefault();
        const log_id = this.props.id;
        fetch(`${API_ENDPOINT.API_ENDPOINT}/logs/${log_id}`,{
            method:'DELETE',
            headers:{
                    'content-type': 'application/json',
                    'Authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => {
            if(!res.ok){
                return res.json().then(e => Promise.reject(e))
            }
            return res;
        })
        .then(() => {
            this.context.deleteLog(log_id);
        })
        .catch(error => {
            console.error({ error });
        })
    }
  
    render(){
        const { date } = this.props;

        return(
                    <div className='logContainer'
                            id={this.props.id}>
                        <p> {this.props.name}&nbsp;</p>
                        <p>Set:&nbsp;  {this.props.set}&nbsp;</p>
                        <p>Rep:&nbsp; {this.props.rep}&nbsp;</p>
                        <p>Wt: &nbsp; {this.props.weight}&nbsp;</p>
                        <span className='date'>
                        {(date) ? format(new Date(date), 'dd-MM-yyyy') : ''}
                        </span>
                        <button className='delete'
                                onClick={this.handleDelete}>Delete</button>
                    </div>             
             )
         }
    }
export default LogItem;