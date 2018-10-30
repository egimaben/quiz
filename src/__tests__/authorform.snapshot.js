'use strict'
import React from 'react';
import renderer from 'react-test-renderer';
import AuthorForm from '../components/AuthorForm';
it('displays author form correctly',()=>{
    let onSubmit=jest.fn();
    const tree = renderer.create(
        <AuthorForm onSubmit={onSubmit}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})