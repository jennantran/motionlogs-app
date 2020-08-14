import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from  '../App';
import LogIn from './LogIn';

it('renders LogIn component without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <App>
        <LogIn></LogIn>
      </App>
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

it('renders the LogIn UI as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <App>
                <LogIn></LogIn>
            </App>
        </BrowserRouter>,
      )
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });