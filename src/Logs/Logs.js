import React, { Component } from 'react';
import MotionsContext from '../MotionsContext';
import LogList from '../LogList/LogList';
import AddLogs from '../AddLogs/AddLogs';

class Logs extends Component{
    static contextType = MotionsContext;
    state = {
        page: 'list',
        logs: this.context, 
        error: null,
    };
    
    clickAddLog(e){
        this.props.history.push('/addLogs');
    }
    changePage = (page) => {
        this.setState({ page })
    }
    
    render(){
        const { page } = this.state;
        const { logs } = this.context; 
        return(
            <section className='logsList'>
                <div className='addLogEntry'>
                    <button
                        onClick={(e) => this.clickAddLog(e)}>Add New Log</button>
                </div>
                <h2>Log Entries</h2>
                <div className='content'>
                    {page === 'add' && (
                        <AddLogs
                            onAddLog={this.addLog}
                            onClickCancel={()=> this.changePage('list')}    
                        />
                    )}
                    {page ==='list' && (
                        <LogList
                            logs={logs}
                        />
                    )}
                </div>
            </section>
        );
    }
}

export default Logs;