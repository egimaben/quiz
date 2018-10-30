'use strict'
import React from 'react';
import renderer from 'react-test-renderer';
import Book from '../components/Book';

it('uses right selection/red highlight',()=>{
    
    //when user selects the right book, the UI of the wrong book must have 'right-book' style
    const tree = renderer.create(
        <Book selectedBook='Animal farm' title='Animal farm' bookStyle='right-book'/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
//when user has not selected a book, the UI of the book must have the default 'book' style

    const tree2 = renderer.create(
        <Book selectedBook='' title='Animal farm'/>
    ).toJSON();
    expect(tree2).toMatchSnapshot();
    
//when user selects the wrong book, the UI of the wrong book must have 'wrong-book' style

    const tree3 = renderer.create(
        <Book selectedBook='Animal farm' title='Animal farm' bookStyle='wrong-book'/>
    ).toJSON();
    expect(tree3).toMatchSnapshot();
})