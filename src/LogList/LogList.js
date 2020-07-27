import React, { Component } from 'react';
import MotionsContext from '../MotionsContext';
import LogItem from '../LogItem/LogItem';

class LogList extends Component{
    static contextType = MotionsContext;
    state = {
        logs: this.context.logs,
    }
    render(){
        const { logs } = this.context;
        console.log(logs);
        return(
            <section>
                <ul className='logList'>
                    {logs.map(log => 
                    <li key = {log.id}>
                        <LogItem 
                            id={log.id}
                            {...log}
                        />
                        </li>)}
                </ul>
            </section>
        );
    }
}

export default LogList;