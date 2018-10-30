import React from 'react';
import ReactDOM from 'react-dom';
import MiniDelete from '../components/MiniDelete';
import {shallow} from 'enzyme';
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };

it('MiniDelete button renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MiniDelete item='item 1'/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
it('callback is invoked when delete button clicked',()=>{
  const callback = jest.fn();
  const button = shallow(<MiniDelete callback={callback} item='item 1'/>); 
  button.find('button').simulate('click',{ preventDefault() {} });
  expect(callback).toBeCalledWith('item 1');
});