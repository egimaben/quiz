'use strict'
import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../components/Image';
it('renders correctly',()=>{
    const tree = renderer.create(
        <Image src='' />
    ).toJSON();
    expect(tree).toMatchSnapshot();
})