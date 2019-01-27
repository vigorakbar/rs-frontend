import React from 'react';

const TextField = (props) => {
  const { disabled, type, value, onInputClick, onButtonClick, placeholder, maxLength, onValueChange, className, inputId, iconLeft, iconRight, ...rest } = props; 
  return (
    <div className='input-group' {...rest}>
      <form>
        {iconLeft && 
          <span className="input-group-addon">
            <i className={iconLeft} />
          </span>
        }
        <input
          className="form-control"
          type={type}
          value={value}
          onClick={onInputClick}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={(e) => onValueChange}
          id={inputId}
        />
        {iconRight &&
          <span className="input-group-addon">
            <i className={iconRight} />
          </span>
        }
      </form>
    </div>
  );
};

export default TextField;