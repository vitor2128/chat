/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';

import Register from './Register';
import Login from './Login';

import { Container } from '../styles';

export interface IPageType {
  pageType?: 'register' | 'login';
}

const InicialPage: React.FC<IPageType> = ({ pageType = 'register' }) => {
  const renderPage = () => {
    switch (pageType) {
      case 'register':
        return <Register />;
      case 'login':
        return <Login />;
      default:
    }
  };

  return <Container>{renderPage()}</Container>;
};

export default InicialPage;
