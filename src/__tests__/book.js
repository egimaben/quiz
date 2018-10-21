import React from 'react';
import ReactDOM from 'react-dom';
import {Book} from '../quizComponents';
import {mount,shallow} from 'enzyme';
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };
it('Book renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Book title=''/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  /**
   * test onclick function of Book component fires up when clicked:
   * since Books component renders Book components and passes onClick event as a prop, we will need to render
   * Books as well as it's child/children
   * -so we will use mount() function provided by Enzyme instead of shallow()
   * -We will also have to create a “fake” onClick event that we would usually pass from Books component 
   * to Book using jest mock functionjest.fn()
   * -We will also take advantage of Enzyme’s find() selector to find the component
   * -we are going to simulate click using simulate().
   * -finally, we will see if the onClick was actually called and with what arguments by using Jest’s toBeCalledWith().
   */
  it('onWrongAnswer called when Book is clicked when its title and correct book title don\'t match',()=>{
    const title='emma';
    const authorData={authoredBook:'animal farm'};
    const onWrongAnswer = jest.fn();
    let book = mount(<Book title={title} authorData={authorData} onWrongAnswer={onWrongAnswer}/>);
    book.simulate('click');
    expect(onWrongAnswer).toBeCalledWith(title,authorData);

  });
  it('onRightAnswer called when Book is clicked when its title and correct book title match',()=>{
    const title='animal farm';
    const authorData={authoredBook:'animal farm'};
    const onRightAnswer = jest.fn();
    let book = mount(<Book title={title} authorData={authorData} onRightAnswer={onRightAnswer}/>);
    book.simulate('click');
    expect(onRightAnswer).toBeCalledWith(title,authorData);

  });