import React from 'react';
import ReactDOM from 'react-dom';
import Books from '../components/Books';
import {shallow} from 'enzyme';
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };
let  authorData={bookOptions:[],authoredBook:'',avatar:''};

it('Books renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Books authorData={authorData}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
it('Books component does not render continue button if showContinueButton is false',()=>{
  const books = shallow(<Books authorData={authorData}/>); 
  books.setProps({authorData:authorData,showContinueButton:false});
  expect(books.find('button').length).toBe(0)

  books.setProps({authorData:authorData,showContinueButton:true});
  expect(books.find('button').length).toBe(1)
})
it('onContinue is invoked when button is displayed and clicked',()=>{
  const onContinue = jest.fn();
  const books = shallow(<Books onContinue={onContinue} showContinueButton={true} authorData={authorData}/>); 
  books.find('button').simulate('click');
  expect(onContinue).toHaveBeenCalled();
});