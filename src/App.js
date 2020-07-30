import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import './App.css';
import HomePage from './HomePage/HomePage';
import Login from './Login/Login';
import Workouts from './Workouts/Workouts';
import AddLogs from './AddLogs/AddLogs';
import Logs from './Logs/Logs';
import MotionsContext from './MotionsContext';
import SignUp from './SignUp/SignUp';

// const logs = [
//   {
//     id: '0',
//     set: '1',
//     rep: '5',
//     weight: '10'
//   },
// ]

class App extends Component {
  state = {
    logs: [],
    user_id: '1', 
    addLog: this.addLog,
    error: null,
    log_id:'',
    addUser: this.addUser
  };

  componentDidMount(){
    const baseUrl = 'http://localhost:8000';
    fetch(`${baseUrl}/api/logs`,{
      'Content-Type': 'application/json'
    })
    .then(res => {
      if (!res) {
        return res.json().then(e => Promise.reject(e));
      }
      return res.json();
    })
    .then((logs) => {
      console.log(logs);
      this.setState({ logs: logs });
    })
    .catch(error => {
      console.error({ error })
    });
}
  addLog = log => {
    console.log(log);
    this.setState({
        logs: [...this.state.logs, log]
    })
    console.log(this.state);
    console.log(this.state.logs);
  }

  setLog = logs => {
    this.setState({
      logs,
      error: null,
    })
  }

  deleteLog = log_id => {
    console.log('delete log enter');
    this.setState({
     logs: this.state.logs.filter(log => log.id !== log_id)
    });
  }

  addUser = (username) => {
    const baseUrl = 'http://localhost:8000';
    return fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(username),
    })
    .then( res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json(),
      )
  }
  render(){
    const contextValue = {
      logs: this.state.logs,
      addLog: this.addLog,
      deleteLog: this.deleteLog,
      user_id: this.state.user_id,
      log_id: this.state.log_id,
      addUser: this.addUser,
    }
    return (
      <div className='app'>
        <MotionsContext.Provider value = {contextValue}>
          <nav><Nav></Nav></nav>
          <main className='App'>
              <Route exact path='/' component={HomePage} />
              <Route path='/login' component={Login} />
              <Route path='/workouts' component={Workouts} />
              <Route path='/addlogs' component={AddLogs}></Route>
              <Route path='/logs' component={Logs} />  
              <Route path='/signup' component={SignUp} />  
          </main>
          <footer></footer>
        </MotionsContext.Provider>
     </div>
    );
  }
}

export default App;