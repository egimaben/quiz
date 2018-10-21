import React from 'react';
import ReactDOM from 'react-dom';
import {Image} from '../quizComponents';
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };
it('Image renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image src=''/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });