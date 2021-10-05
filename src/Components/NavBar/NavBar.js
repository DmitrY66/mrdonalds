/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import logoImg from '../../img/logo.svg';
import signImg from '../../img/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flax;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 28px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  margin-left: 15px;
  width: 50px;
`;

const LogIn = styled.button`
  margin-right: 40px;
  padding: 4px 8px;
  font-size: 16px;
  color: white;
  letter-spacing: 1.6px;
  border: none;
  background: transparent;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LogOut = styled.span`
  font-size: 20px;
  font-weidght: 700;
  cursor: pointer;
  margin-right: 40px;
`;

const Figure = styled.figure`
  margin: 0 20px 0 0;
`;

export const NavBar = ({ authentication, logIn, logOut }) => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>Mr Donald's</H1>
    </Logo>
    {authentication ?
      <User>
        <Figure>
          <img src={signImg} alt={authentication.displayName} />
          <figcaption>{authentication.displayName}</figcaption>
        </Figure>
        <LogOut title="выйти" onClick={logOut}>&#10006;</LogOut>
      </User> :
      <LogIn onClick={logIn}>
        <img src={signImg} alt="войти" />
        <p>войти</p>
      </LogIn>}
  </NavBarStyled>
);
