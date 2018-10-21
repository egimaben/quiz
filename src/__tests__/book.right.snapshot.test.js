'use strict'
import React from 'react';
import renderer from 'react-test-renderer';
import {Book} from '../quizComponents';
//when user selects the right book, the UI of the wrong book must have 'right-book' style
it('uses right selection/red highlight',()=>{
    const tree = renderer.create(
        <Book selectedBook='Animal farm' title='Animal farm' bookStyle='right-book'/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})