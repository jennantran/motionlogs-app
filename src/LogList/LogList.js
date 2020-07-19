import React, { Component } from 'react';
import MotionsContext from '../MotionsContext';
import LogItem from '../LogItem/LogItem';

class LogList extends Component{
    static contextType = MotionsContext;
    state = {
        logs: this.context.logs
    }
    render(){
        const { logs } = this.context;
        console.log(logs);
        return(
            <section className='logContainer'>
                <ul className='logList'>
                    {logs.map(log => 
                        <LogItem 
                            key={log.id}
                            {...log}
                        />)}
                </ul>
            </section>
        );
    }
}

export default LogList;