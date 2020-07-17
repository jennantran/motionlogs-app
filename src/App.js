import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import './App.css';
import HomePage from './HomePage/HomePage';
import Login from './Login/Login';
import Workouts from './Workouts/Workouts';
import AddLogs from './AddLogs/AddLogs';
import Logs from './Logs/Logs';

class App extends Component {
  render(){
    return (
      <div className='app'>
        <nav><Nav></Nav></nav>
        <main className='App'>
            <Route exact path='/' component={HomePage} />
            <Route path='/login' component={Login} />
            <Route path='/workouts' component={Workouts} />
            <Route path='/addlogs' component={AddLogs}></Route>
            <Route path='/logs' component={Logs} />  
        </main>
        <footer></footer>
     </div>
    );
  }
}

export default App;