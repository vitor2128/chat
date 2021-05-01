/* eslint-disable react/prop-types */
import React from 'react';

import { ButtonStyled } from './styles';

interface ButtonStyledProps {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'small';
  label?: string;
  type?: 'submit';
  click?: () => void;
}

const Button: React.FC<ButtonStyledProps> = ({
  click,
  type,
  variant = 'primary',
  label = '',
  size = 'default',
  children,
}) => {
  return (
    <ButtonStyled variant={variant} size={size} type={type} onClick={click}>
      {children}
      <p>{label}</p>
    </ButtonStyled>
  );
};

export default Button;
