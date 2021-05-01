/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { Chat } from '@styled-icons/bootstrap/';
import { Send } from '@styled-icons/feather';

import Button from '../../components/Button';
import api from '../../services/api';

import {
  Container,
  ContainerButton,
  ContainerStartSupport,
  HeaderSupport,
  ContainerInput,
  ButtonWrapper,
  ContainerBorder,
  ContainerInputInChat,
  ContainerMessage,
} from './styles';
import Input from '../../components/Input';
import InputText from '../../components/InputText';

const User: React.FC = () => {
  const [switchChat, setSwitchChat] = useState('');
  const [data, setData] = useState([]);

  const onSwitchChat = () => {
    if (switchChat === 'startSupport') {
      setSwitchChat('');
    } else {
      setSwitchChat('startSupport');
    }
  };
  const onSwitchInChat = () => {
    if (switchChat === 'startSupport') {
      setSwitchChat('inSupport');
    } else {
      setSwitchChat('');
    }
  };

  const renderChat = () => {
    switch (switchChat) {
      case 'startSupport':
        return (
          <ContainerStartSupport>
            <HeaderSupport>
              <span>Iniciar chat com suporte</span>
            </HeaderSupport>
            <ContainerBorder>
              <ContainerInput>
                <InputText className="inputTextAreaChat" placeholder="Digite sua duvida!" autofocus />
                <Input className="inputMail" placeholder="Digite seu e-mail!" />
              </ContainerInput>
              <ButtonWrapper>
                <Button click={() => setSwitchChat('')}>Cancelar</Button>
                <Button click={onSwitchInChat}>Enviar</Button>
              </ButtonWrapper>
            </ContainerBorder>
          </ContainerStartSupport>
        );
      case 'inSupport':
        return (
          <ContainerStartSupport>
            <HeaderSupport>
              <span>Em atendimento</span>
            </HeaderSupport>

            <ContainerBorder>
              <ContainerMessage>
                <h5>Seu nome</h5>
                <h3>Mensagem</h3>
              </ContainerMessage>
              <ContainerInputInChat>
                <Input className="inputMail" placeholder="Digite sua menssagem" />
                <Send />
              </ContainerInputInChat>
            </ContainerBorder>
          </ContainerStartSupport>
        );
      default:
    }
  };

  useEffect(() => {
    api
      .get('/settings/admin')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  return (
    <Container>
      {renderChat()}
      <ContainerButton>
        <Button click={onSwitchChat}>
          Suporte
          <Chat />
        </Button>
      </ContainerButton>
    </Container>
  );
};

export default User;
