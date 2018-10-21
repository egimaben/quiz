'use strict'
import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from '../quizComponents';
it('renders correctly',()=>{
    const tree = renderer.create(
        <Header />
    ).toJSON();
    expect(tree).toMatchSnapshot();
})