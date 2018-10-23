import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from '../quizComponents';
import {MemoryRouter as Router} from 'react-router-dom'
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };
it('header renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Header /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });