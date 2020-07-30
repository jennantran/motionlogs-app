import React, { Component } from 'react';
import './LogItem.css';
import MotionsContext from '../MotionsContext';
import { createBrotliCompress } from 'zlib';
import { format } from 'date-fns';

class LogItem extends Component{
    static contextType = MotionsContext;
  
    state = {
        logs: this.context.logs
    }
    // handleDelete = (e) =>  {
    //     const logId = this.props.id;
    //     console.log('enter delete');
    //     console.log(this.state.logs);
    //     console.log(logId);
    //     this.context.deleteLog(logId);
    //   }

    handleDelete = e => {
        e.preventDefault();
        const log_id = this.props.id;
        console.log(log_id);
        const baseUrl = 'http://localhost:8000';

        fetch(`${baseUrl}/api/logs/${log_id}`,{
            method:'DELETE',
            headers:{
                    'content-type': 'application/json'
            },
        })
        .then(res => {
            if(!res.ok){
                return res.json().then(e => Promise.reject(e))
            }
            console.log(res);
            return res;
        })
        .then((log_id) => {
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
                        <p>Workout Name: &nbsp; {this.props.name}&nbsp;</p>
                        <p>Set:&nbsp;  {this.props.set}&nbsp;</p>
                        <p>Reps:&nbsp; {this.props.rep}&nbsp;</p>
                        <p>Weight: &nbsp; {this.props.weight}&nbsp;</p>
                        <span className='date'>
                        {(date) ? format(new Date(date), 'dd-MM-yyyy') : ''}
                        </span>
                        <button className='delete'
                                  onClick={this.handleDelete}>Delete</button>
                    </div>             
        );
    }
}
export default LogItem;