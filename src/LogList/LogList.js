import React, { Component } from 'react';
import MotionsContext from '../MotionsContext';
import LogItem from '../LogItem/LogItem';

class LogList extends Component{
    static contextType = MotionsContext;
    render(){
        const { logs } = this.context;
        return(
            <section>
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