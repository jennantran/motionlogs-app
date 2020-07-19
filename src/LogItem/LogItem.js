import React, { Component } from 'react';

class LogItem extends Component{
    render(){
        return(
            <li className='logItem'>
                <div>
                    <p>
                    {this.props.name}
                    </p>
                </div>
            </li>
        );
    }
}
export default LogItem;