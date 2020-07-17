import React, { Component } from 'react';
import Timer from '../Timer/Timer';


class Logs extends Component{
    render(){
        return(
            <section>
                <div className='addLogEntry'>
                    <button>Add New Log</button>
                </div>
            </section>
        );
    }
}

export default Logs;