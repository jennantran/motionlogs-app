import React, { Component } from 'react';
import './LogItem.css';
import MotionsContext from '../MotionsContext';
import { createBrotliCompress } from 'zlib';

class LogItem extends Component{
    static contextType = MotionsContext;
    
    state = {
        logs: this.context.logs
    }
    handleDelete = (e) =>  {
        const logId = this.props.id;
        console.log('enter delete');
        console.log(this.state.logs);
        console.log(logId);

        this.context.deleteLog(logId);

      }
  

    render(){
        return(
                <li>
                    <div className='logContainer'>
                        <p>Workout Name: &nbsp; {this.props.name}&nbsp;</p>
                        <p>Set:&nbsp;  {this.props.set}&nbsp;</p>
                        <p>Reps:&nbsp; {this.props.rep}&nbsp;</p>
                        <p>Weight: &nbsp; {this.props.weight}&nbsp;</p> 
                        <button className='delete'
                                  onClick={this.handleDelete
                                  }>Delete</button>
                    </div>
                </li>
        );
    }
}
export default LogItem;