/* eslint-disable no-unused-vars */
// import React, { useContext } from 'react';
import React from 'react';
import styled from 'styled-components';
// import dbMenu from '../DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
// import { useFetch } from '../Hooks/useFetch';
// import { Context } from '../Functions/context';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 50px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

export const Menu = ({ dbMenu }) => {

  // const { openItem: { setOpenItem } } = useContext(Context);

  // const res = useFetch();
  // const dbMenu = res.response;

  return (
    <MenuStyled>
      <Banner />
      {dbMenu ?
        <>
          <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem
              itemList={dbMenu.burger}
              // setOpenItem={setOpenItem}
            />
          </SectionMenu>

          <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem
              itemList={dbMenu.other}
              // setOpenItem={setOpenItem}
            />
          </SectionMenu>
        </> :
        <div>Loading...</div>
      }
    </MenuStyled>
  )
};
