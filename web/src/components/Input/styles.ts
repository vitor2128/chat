import styled, { css } from 'styled-components';

interface InputProps {
  variant?: string;
  className?: string;
}

export const InputStyled = styled.input<InputProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.variant === 'ckeckbox' &&
    css`
      display: inline;
      width: 24px;
      height: 24px;
      border-radius: 10px;
      color: solid 2px #fdc91f;
      margin: 2px 0 2px 4px;
    `}
  ${(props) =>
    props.variant === 'description' &&
    css`
      width: 100%;
      height: 72px;
      padding-left: 12px;
      border-radius: 10px;
      background-color: ${props.theme.colors.backgroundInput};
      margin: 24px 0 8px;
      border: none;
      font-size: 16px;
      :focus {
        border: 2px solid ${props.theme.colors.warning};
      }
      ::placeholder {
        color: #413d3d;
      }
    `}
  ${(props) =>
    props.variant === 'input' &&
    css`
      width: 100%;
      height: 40px;
      padding-left: 12px;
      border-radius: 10px;
      background-color: ${props.theme.colors.backgroundInput};
      margin: 24px 0 8px;
      border: none;
      font-size: 16px;
      :focus {
        border: 2px solid ${props.theme.colors.warning};
      }
      ::placeholder {
        color: #413d3d;
      }
    `}
  ${(props) =>
    props.className === 'inputTextAreaChat' &&
    css`
      margin: 5px 0 10px 0;
      width: 100%;
      height: 80px;
      border: 1px solid;
      border-radius: 12px;
      background-color: #fff;
      :focus {
        border: 2px solid ${props.theme.colors.warning};
      }
    `}
  ${(props) =>
    props.className === 'inputMail' &&
    css`
      margin: 5px 0 10px 0;
      width: 100%;
      height: 40px;
      border: 1px solid;
      border-radius: 12px;
      background-color: #fff;
      :focus {
        border: 2px solid ${props.theme.colors.warning};
      }
    `}



  :read-only {
    border: none;
  }
`;
