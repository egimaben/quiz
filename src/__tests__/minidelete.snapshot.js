'use strict'
import React from 'react';
import renderer from 'react-test-renderer';
import MiniDelete from '../components/MiniDelete';
it('displays delete button component correctly',()=>{
    //when should not show continue button
    const tree = renderer.create(
        <MiniDelete item='item 1'/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})