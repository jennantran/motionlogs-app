import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import './App.css';
import MotionsContext from './MotionsContext';
import AuthApiService from './services/auth-api-service';
import TokenService from './services/token-service';
import SignUp from './SignUp/SignUp';
import API_ENDPOINT from './config';
import HomePage from './HomePage/HomePage';
import Login from './Login/Login';
import Workouts from './Workouts/Workouts';
import AddLogs from './AddLogs/AddLogs';
import Logs from './Logs/Logs';
import { Link, useHistory } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      logs: JSON.parse(localStorage.getItem('logs')) || [],
      user_id: '', 
      addLog: this.addLog,
      error: null,
      log_id:'',
      addUser: this.addUser,
    }
    if (window.performance) {
      if (performance.navigation.type == 1) {
          alert('The page is reloading. Log back in to access logs');
      } else {
          alert('This page is not reloaded');
      }
    }
  };
  
  testfunction(){
    this.props.history.push('/addLogs');
  }
  onUnload(event) { 
    this.testfunction();
  }
  
  componentDidMount() {
    window.addEventListener('beforeunload', this.onUnload)
  }
  
  componentWillUnmount() {
     window.removeEventListener('beforeunload', this.onUnload)
  }
 
  handlePostAuthenticate = ({ username, password, user_id }) => {
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        this.setState({
          user_id: res.user_id
        });
        fetch(`${API_ENDPOINT.API_ENDPOINT}/logs`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'user_id': res.user_id,
              },
            })
            .then((response) => response.json())
            .then((responseJson) => {
              if (responseJson.success && responseJson.success === false) {
                throw new Error('error in getting logs');
              } else {
                this.setState({
                  logs: responseJson,
                });
              }
            })
            .catch((error) => {
              console.error(error);
            })
         })    
      }

  addLog = log => {
    this.setState({
        logs: [...this.state.logs, log]
    },() => {
      localStorage.setItem('logs', JSON.stringify(this.state.logs));
    })
  }

  setLog = logs => {
    this.setState({
      logs,
      error: null,
    })
  }

  deleteLog = log_id => {
    this.setState({
      logs: this.state.logs.filter(log => log.id != log_id)
    })
  }

  addUser = (username) => {
    return fetch(`${API_ENDPOINT.API_ENDPOINT}/signup`, {
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

  clearLogs = () => {
    this.setState({
      logs: [],
    })
  }

  render(){
    const contextValue = {
      logs: this.state.logs,
      addLog: this.addLog,
      deleteLog: this.deleteLog,
      user_id: this.state.user_id,
      log_id: this.state.log_id,
      addUser: this.addUser,
      handlePostAuthenticate: this. handlePostAuthenticate,
      clearLogs: this.clearLogs,
    };
  

    return (
      <div className='app'>
        <MotionsContext.Provider value = {contextValue}>
          <nav><Nav/></nav>
          <main className='App'>
              <Route exact path='/' component={HomePage} />
              <Route path='/login' component={Login} />
              <Route path='/workouts' component={Workouts} />
              <Route path='/addlogs' component={AddLogs}></Route>
              <Route path='/logs' component={Logs} />  
              <Route path='/signup' component={SignUp} />  
          </main>
        </MotionsContext.Provider>
     </div>
    )
  }
}

export default App;