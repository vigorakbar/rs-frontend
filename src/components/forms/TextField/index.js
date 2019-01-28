import React from 'react';

const TextField = (props) => {
  const {
    disabled, type, value, onInputClick, placeholder, maxLength, // eslint-disable-line
    onValueChange, className, inputId, iconLeft, iconRight, ...rest // eslint-disable-line
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

export default TextField;
