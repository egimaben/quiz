'use strict'
import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from '../quizComponents';
import {MemoryRouter as Router} from 'react-router-dom';

it('renders correctly',()=>{
    const tree = renderer.create(
        <Router><Header /></Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})