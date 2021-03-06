import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from  '../App';
import AddLogs from './AddLogs';
import Logs from '../Logs/Logs';

it('renders addlogs component without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
      <BrowserRouter>
        <App>
            <Logs>
                 <AddLogs></AddLogs>
            </Logs>
        </App>
      </BrowserRouter>,
    div
  );
  //clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the addlogs UI as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
        <App>
            <Logs>
                 <AddLogs></AddLogs>
            </Logs>
        </App>
      </BrowserRouter>,
      )
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });