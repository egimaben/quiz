'use strict'
import React from 'react';
import renderer from 'react-test-renderer';
import Books from '../components/Books';
it('displays books component correctly',()=>{
    let  authorData={bookOptions:[],authoredBook:'',avatar:''};
    let onContinue=jest.fn();
    //when should not show continue button
    const tree = renderer.create(
        <Books onContinue={onContinue} showContinueButton={false} authorData={authorData}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
//when should show continue button

    const tree2 = renderer.create(
        <Books onContinue={onContinue} showContinueButton={true} authorData={authorData}/>
    ).toJSON();
    expect(tree2).toMatchSnapshot();
})