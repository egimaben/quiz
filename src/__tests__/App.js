import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {mount} from 'enzyme';
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };

it('app renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('fuckin loads',()=>{
  const app = mount(<App />);
  //ensure all children
  expect(app.find('div').first().length).toBe(1);
  expect(app.find('Header').first().length).toBe(1);
  expect(app.find('Footer').first().length).toBe(1);
  expect(app.find('Image').first().length).toBe(1);
  expect(app.find('Books').first().length).toBe(1);
  expect(app.find('Books').find('div').first().length).toBe(1);
  //confirm initial state
  expect(app.state().userPassed).toBe(false);
  expect(app.state().gameStarting).toBe(true);
  expect(app.state().currentAuthorData).toEqual({});
  expect(app.state().bookStyle).toBe('book');
  expect(app.state().selectedBook).toBe('');
  expect(app.state().index).toBe(0);

  //the following data must absolutely be first in data.js array as we are basing on it to run the rest of the test
  const firstAuthor = {
    'bookOptions': ['What have you done', 'Every Breath', 'My sister\'s grave', 'Due princess'],
    'authoredBook': 'What have you done',
    'authorName': 'Mathew Farrel',
    'avatar': 'mathew.jpg'
  };
  const secondAuthor={
    'bookOptions': ['The story teller\'s secret', 'The ragged edge of night', 'Beneath a scarlet sky', 'The tuscan child'],
    'authoredBook': 'The ragged edge of night',
    'authorName': 'Olivier Hawker',
    'avatar': 'olivier.jpg'
  }

  //confirm state after wrong selection

  app.find('Book').at(1).simulate('click');
  expect(app.state().userPassed).toBe(false);
  expect(app.state().gameStarting).toBe(false);
  expect(app.state().currentAuthorData).toEqual(expect.objectContaining(firstAuthor));
  expect(app.state().bookStyle).toBe('wrong-book');
  expect(app.state().selectedBook).toBe('Every Breath');
  expect(app.state().index).toBe(0);

  //confirm state after right selection
 
  app.find('Book').at(0).simulate('click');
  expect(app.state().userPassed).toBe(true);
  expect(app.state().gameStarting).toBe(false);
  expect(app.state().currentAuthorData).toEqual(expect.objectContaining(firstAuthor));
  expect(app.state().bookStyle).toBe('right-book');
  expect(app.state().selectedBook).toBe('What have you done');
  expect(app.state().index).toBe(0);

  //confirm state after clicking continue
  app.find('.continue-button').simulate('click');
  expect(app.state().userPassed).toBe(false);
  expect(app.state().gameStarting).toBe(false);
  expect(app.state().currentAuthorData).toEqual({});
  expect(app.state().bookStyle).toBe('book');
  expect(app.state().selectedBook).toBe('');
  expect(app.state().index).toBe(1);
  console.log(app.state());
  
  // expect(booksDiv.length).toBe(4);
})




