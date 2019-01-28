import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const {
    className, src, srcSet, alt, ...rest
  } = props;
  return (
    <img
      className={className}
      src={src}
      srcSet={srcSet}
      alt={alt}
      {...rest}
    />
  );
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  srcSet: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default Image;
