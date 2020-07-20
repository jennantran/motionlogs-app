import React, { Component } from 'react';
import './LogItem.css';

class LogItem extends Component{
    render(){
        return(
                <li>
                    <div className='logContainer'>
                        <div><p>Workout Name: &nbsp; {this.props.name}</p></div>
                        <div><p>Set:&nbsp;  {this.props.set}</p></div>
                        <div><p>Reps:&nbsp; {this.props.rep}</p></div> 
                        <div><p>Weight: &nbsp; {this.props.weight}</p></div>  
                    </div>
                </li>
        );
    }
}
export default LogItem;