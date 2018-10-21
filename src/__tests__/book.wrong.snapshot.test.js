'use strict'
import React from 'react';
import renderer from 'react-test-renderer';
import {Book} from '../quizComponents';
//when user selects the wrong book, the UI of the wrong book must have 'wrong-book' style
it('uses wrong selection/red highlight',()=>{
    const tree = renderer.create(
        <Book selectedBook='Animal farm' title='Animal farm' bookStyle='wrong-book'/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})