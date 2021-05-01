/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';

import Register from './InicialPage/Register';
import Login from './InicialPage/Login';
import Administrator from './Administrator';
import User from './User';

import { Container } from './styles';

export interface IPageType {
  pageType?: 'register' | 'login' | 'administrator' | 'user';
}

const Pages: React.FC<IPageType> = ({ pageType = 'register' }) => {
  const renderPage = () => {
    switch (pageType) {
      case 'register':
        return <Register />;
      case 'login':
        return <Login />;
      case 'administrator':
        return <Administrator />;
      case 'user':
        return <User />;
      default:
    }
  };

  return <Container>{renderPage()}</Container>;
};

export default Pages;
