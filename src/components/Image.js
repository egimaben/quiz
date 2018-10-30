import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src }) => {
    return <img className={'author-img'} src={src} alt='author of shown books' />
  }
  Image.propTypes = {
    src: PropTypes.string.isRequired
  }
  export default Image;