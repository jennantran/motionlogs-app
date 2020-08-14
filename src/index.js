import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MotionsContext from './MotionsContext';
import App from './App';
import './index.css';

ReactDOM.render(
      <BrowserRouter>
          <MotionsContext.Provider>
             <App />
          </MotionsContext.Provider>
      </BrowserRouter>,
      document.getElementById('root')
);