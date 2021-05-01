import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 5px;
  max-width: 380px;
  animation: up 1s;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  > button {
    color: #fff;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const ContainerBorder = styled.div`
  border: 1px solid;
  border-radius: 0px;
  background-color: #fff;
  padding: 10px;
`;

export const ContainerInput = styled.div`
  display: block;
  width: 100%;
`;

export const ContainerInputInChat = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid;
  > svg {
    margin-left: 10px;
    width: 40px;
    :hover {
      color: #8257e6;
    }
    cursor: pointer;
  }
`;

export const ContainerButton = styled.div`
  float: right;

  border-radius: 68px;
  text-align: center;

  outline: none;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  position: absolute;
  bottom: 30px;
  right: 10px;
  cursor: pointer;

  > button {
    color: #fff;
    > svg {
      width: 30px;
      height: 30px;
      padding-left: 10px;
    }
    :hover {
      color: #fff;
    }
  }
`;

export const ContainerStartSupport = styled.div`
  position: absolute;
  max-width: 330px;
  right: 20px;
  animation: up 1s;
`;

export const HeaderSupport = styled.div`
  float: right;
  width: 100%;
  height: 56px;
  margin-bottom: 10px;
  background: #8257e6;

  display: flex;
  justify-content: space-between;
  > span {
    font-size: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
`;

export const ContainerMessage = styled.div`
  width: 180px;
  display: flex;
  margin: 10px 10px 10px 0;

  border-radius: 10px;
  background-color: #ddd;
  padding: 10px;
`;
