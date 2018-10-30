import React from 'react';
import AuthorForm from '../components/AuthorForm';
import { mount } from 'enzyme';
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };
it('can submit', () => {
    const onSubmit = jest.fn();
    const authorForm = mount(<AuthorForm onSubmit={onSubmit} />);
    authorForm.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(onSubmit).toHaveBeenCalled();

})
it('transitions state appropriately with user interaction', () => {
    const form = mount(<AuthorForm onSubmit={jest.fn()} />);
    expect(form.state().authorName).toBe('');
    expect(form.state().bookOptions).toEqual([]);
    expect(form.state().authoredBook).toBe('');
    expect(form.state().booktmp).toBe('');
    expect(form.state().avatar).toBe('');

    //add book
    form.find('input').at(3).getDOMNode().value = 'book 1';
    form.find('input').at(3).simulate('change');
    expect(form.state().booktmp).toBe('book 1');
    //click add button
    form.find('button').simulate('click');
    expect(form.state().booktmp).toBe('');
    expect(form.state().bookOptions).toEqual(['book 1']);
})
