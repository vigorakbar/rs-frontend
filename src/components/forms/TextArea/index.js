import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => {
  const {
    value, onChange, cols, rows, placeholder, ...rest
  } = props;
  return (
    <textarea
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={(e) => { onChange(e.target.value); }}
      cols={cols}
      rows={rows}
      {...rest}
    />
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  cols: PropTypes.number,
  rows: PropTypes.number,
  className: PropTypes.string,
};

export default TextArea;
