import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from  '../App';
import Login from './Login';

it('renders Login component without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <App>
        <Login></Login>
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
                <Login></Login>
            </App>
        </BrowserRouter>,
      )
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });