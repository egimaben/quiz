'use strict'
import React from 'react';
import renderer from 'react-test-renderer';
import {Book} from '../quizComponents';
//when user has not selected a book, the UI of the book must have the default 'book' style
it('uses normal highlight',()=>{
    const tree = renderer.create(
        <Book selectedBook='' title='Animal farm'/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})