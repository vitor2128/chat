/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React from 'react';

import { InputStyled } from './styles';

interface InputProps {
  variant?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  Change?: (e: any) => void;
  required?: boolean;
  value?: string;
  className?: string;
  readonly?: boolean;
  autoComplete?: string;
  bluer?: (e: any) => void;
  click?: () => void;
  focus?: (e: any) => void;
  src?: string;
  autofocus?: boolean;
}

const InputText: React.FC<InputProps> = ({
  value,
  type,
  placeholder,
  Change,
  variant = 'input',
  required,
  className,
  name,
  autoComplete,
  readonly,
  bluer,
  click,
  focus,
  src,
  autofocus,
}) => {
  return (
    <InputStyled
      onClick={click}
      value={value}
      name={name}
      placeholder={placeholder}
      variant={variant}
      onChange={Change}
      required={required}
      className={className}
      autoComplete={autoComplete}
      readOnly={readonly}
      onBlur={bluer}
      onFocus={focus}
      autoFocus={autofocus}
    />
  );
};

export default InputText;
