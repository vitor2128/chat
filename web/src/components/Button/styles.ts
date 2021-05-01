import styled, { css } from 'styled-components';

interface ButtonStyledProps {
  variant: 'primary' | 'secondary';
  size: 'default' | 'small';
}

// TODO - Usar Cores do tema //
export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: ${(props) => (props.size === 'default' ? '56px' : '32px')};

  cursor: pointer;
  border: none;
  border-radius: 100px;
  box-shadow: 0 5px 15px 0 rgba(130, 87, 230, 0.35);

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-image: linear-gradient(to bottom, #8257e6, #8257ff 50%);
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: ${props.theme.colors.backgroudrgba};
      border: 2px solid ${props.theme.colors.warning};
    `}

    &:hover {
    filter: brightness(0.95);
  }

  > p {
    font-size: ${(props) => (props.size === 'default' ? '20px' : '16px')};
    font-weight: 700;
    color: ${(props) => (props.variant === 'primary' ? '#413d3d' : `${props.theme.colors.textButtton}`)};
  }
`;
