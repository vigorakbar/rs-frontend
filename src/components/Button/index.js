import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

const IconLeft = styled.i`
  margin-right: 4px;
`;
const IconRight = styled.i`
  margin-left: 4px;
`;

const Button = (props) => {
  const {
    iconLeft, iconRight, buttonStyle, buttonSize, disabled, className, children, ...rest
  } = props;
  return (
    <button
      className={
        cx(
          'btn',
          {
            [`btn-${buttonStyle}`]: buttonStyle,
            [`btn-${buttonSize}`]: buttonSize,
          },
          className,
        )
      }
      disabled={disabled}
      type="submit"
      {...rest}
    >
      {iconLeft && <IconLeft className={iconLeft} />}
      {children}
      {iconRight && <IconRight className={iconRight} />}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  buttonStyle: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'link',
    'outline-primary',
    'outline-secondary',
    'outline-success',
    'outline-danger',
    'outline-warning',
    'outline-info',
    'outline-light',
    'outline-dark',
  ]),
  buttonSize: PropTypes.oneOf(['sm', 'lg']),
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
