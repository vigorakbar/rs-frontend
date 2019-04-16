import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => {
  const {
    value, onChange, cols, rows, ...rest
  } = props;
  return (
    <textarea
      value={value}
      onChange={(e) => { onChange(e.target.value); }}
      cols={cols}
      rows={rows}
      {...rest}
    />
  );
};

TextArea.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  cols: PropTypes.number,
  rows: PropTypes.number,
};

export default TextArea;
