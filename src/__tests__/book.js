import React from 'react';
import ReactDOM from 'react-dom';
import {Book} from '../quizComponents';
import {mount} from 'enzyme';
const authorData={authoredBook:'animal farm'};
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };
it('Book renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Book title=''/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('onWrongAnswer called when Book is clicked when its title and correct book title don\'t match',()=>{
    const onWrongAnswer = jest.fn();
    let book = mount(<Book title='emma' authorData={authorData} onWrongAnswer={onWrongAnswer}/>);
    book.simulate('click');
    expect(onWrongAnswer).toBeCalledWith('emma',authorData);

  });
  it('onRightAnswer called when Book is clicked when its title and correct book title match',()=>{
    const onRightAnswer = jest.fn();
    let book = mount(<Book title='animal farm' authorData={authorData} onRightAnswer={onRightAnswer}/>);
    book.simulate('click');
    expect(onRightAnswer).toBeCalledWith('animal farm',authorData);

  });