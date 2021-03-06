/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from '../Order/OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background: #fff;
  width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px #0000003b;
`;

export const OrderTitle = styled.h2`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
  margin: 0 35px 30px;
`;

const OrderList = styled.ul`
  
`;

export const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

export const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  min-left: 20px;
  flex-grow: 1;
`;

const EmptyList = styled.p`
  text-align: center;
  min-width: 65px;
  min-left: 20px;
`;

export const Order = () => {

  const {
    auth: { authentication, logIn },
    orders: { orders, setOrders },
    orderConfirm: { setOpenOrderConfirm }
  } = useContext(Context);

  const deleteItem = index => {
    const newOrders = orders.filter((item, i) => index !== i);
    setOrders(newOrders);
  };

  const total = orders.reduce((result, order) =>
    totalPriceItems(order) + result, 0);

  const totalCounter = orders.reduce((result, order) =>
    order.count + result, 0);

  return (
    <>
      <OrderStyled>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
          {orders.length ?
            <OrderList>
              {orders.map((order, index) => <OrderListItem
                key={index}
                order={order}
                deleteItem={deleteItem}
                index={index}
              />)}
            </OrderList> :
            <EmptyList>Список заказов пуст</EmptyList>}
        </OrderContent>
        {orders.length ?
          <>
            <Total>
              <span>Итого</span>
              <span>{totalCounter}</span>
              <TotalPrice>
                {formatCurrency(total)}
              </TotalPrice>
            </Total>
            <ButtonCheckout onClick={() => {
              if (authentication) {
                setOpenOrderConfirm(true);
              } else {
                logIn()
              }
            }}
            >Оформить</ButtonCheckout>
          </> :
          null
        }
      </OrderStyled>
    </>
  )
};
