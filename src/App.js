import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import './App.css';
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <div className='app'>
      <nav><Nav></Nav></nav>
      <main className='App'>
          <Route exact path='/' component={HomePage} />
          {/* <Route path='/workouts' component={Workout />
          <Route path='/login' component={Login} />
          <Route path='/signUp' component={SignUp} />
          <Route path='/logs' component={Logs} /> */}
      </main>
      <section></section>
      <section></section>
      <footer></footer>
    </div>
  );
}

export default App;