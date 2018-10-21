'use strict'
import React from 'react';
import renderer from 'react-test-renderer';
import {Image} from '../quizComponents';
it('renders correctly',()=>{
    const tree = renderer.create(
        <Image src='' />
    ).toJSON();
    expect(tree).toMatchSnapshot();
})