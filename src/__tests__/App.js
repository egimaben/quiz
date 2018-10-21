import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {Header,Footer,Image,Book,Books} from '../quizComponents';
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };
it('app renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Footer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Image renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Image src=''/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Book renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Book />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Books renders without crashing', () => {
  const authorData={bookOptions:[]};
  const div = document.createElement('div');
  ReactDOM.render(<Books authorData={authorData}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
