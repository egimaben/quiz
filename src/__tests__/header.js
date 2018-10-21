import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from '../quizComponents';
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };
it('header renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });