import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from  '../App';
import Nav from '../Nav/Nav';

it('renders Nav component without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <App>
         <Nav></Nav>
      </App>
    </BrowserRouter>,
    div
  );
  //clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the workout UI as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <App>
                <Nav></Nav>
            </App>
        </BrowserRouter>,
      )
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });