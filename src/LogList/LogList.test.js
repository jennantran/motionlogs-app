import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from  '../App';
import LogList from './LogList';
import Logs from '../Logs/Logs';

it('renders LogList component without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <App>
         <Logs>
             <LogList></LogList>
         </Logs>
      </App>
    </BrowserRouter>,
    div
  );
  //clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the LogList UI as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
        <App>
           <Logs>
               <LogList></LogList>
           </Logs>
        </App>
      </BrowserRouter>,
      )
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });