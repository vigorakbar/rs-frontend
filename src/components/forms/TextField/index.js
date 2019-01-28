import React from 'react';
import PropTypes from 'prop-types';

const TextField = (props) => {
  const {
    disabled, type, value, onInputClick, placeholder, maxLength,
    onValueChange, className, inputId, iconLeft, iconRight, ...rest
  } = props;
  return (
    <div className="input-group" {...rest}>
      <form>
        {iconLeft
          && (
          <span className="input-group-addon">
            <i className={iconLeft} />
          </span>
          )
        }
        <input
          className="form-control"
          disabled={disabled}
          type={type}
          value={value}
          onClick={onInputClick}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={e => onValueChange(e.target.value)}
          id={inputId}
        />
        {iconRight
          && (
            <span className="input-group-addon">
              <i className={iconRight} />
            </span>
          )
        }
      </form>
    </div>
  );
};

TextField.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.any.isRequired,
  onInputClick: PropTypes.func,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  onValueChange: PropTypes.func,
  className: PropTypes.string,
  inputId: PropTypes.string,
  iconLeft: PropTypes.any,
  iconRight: PropTypes.any,
};

export default TextField;
