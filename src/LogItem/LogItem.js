import React, { Component } from 'react';
import './LogItem';

class LogItem extends Component{
    render(){
        return(
                <li>
                    <div className='logContainer'>
                        <div className='grid-item'><p>Workout Name: &nbsp; {this.props.name}</p></div>
                        <div className='grid-item'><p>Set:&nbsp;  {this.props.set}</p></div>
                        <div className='grid-item'><p>Reps:&nbsp; {this.props.rep}</p></div> 
                        <div className='grid-item'><p>Weight: &nbsp; {this.props.weight}</p></div>  
                    </div>
                </li>
        );
    }
}
export default LogItem;