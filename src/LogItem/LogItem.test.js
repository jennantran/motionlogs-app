import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from  '../App';
import LogItem from './LogItem';

it('renders LogItem component without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <App>
         <LogItem></LogItem>
      </App>
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

it('renders the LogItem UI as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
        <App>
        <LogItem></LogItem>
        </App>
      </BrowserRouter>,
      )
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });