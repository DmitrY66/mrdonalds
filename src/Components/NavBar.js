/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import logoImg from '../img/logo.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
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

const Button = styled.button`
  margin-right: 40px;
  padding: 8px 14px;
  font-size: 17px;
  letter-spacing: 1.6px;
  cursor: pointer;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>Mr Donald's</H1>
    </Logo>
    <Button>log in</Button>
  </NavBarStyled>
);
