import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/Footer';
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };
it('Footer renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });