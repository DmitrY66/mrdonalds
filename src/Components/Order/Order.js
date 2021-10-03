/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from '../Order/OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px #0000003b;
`;

const OrderTitle = styled.h2`
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

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  min-left: 20px;
`;

const EmptyList = styled.p`
  text-align: center;
  min-width: 65px;
  min-left: 20px;
`;

export const Order = ({ orders }) => {

  const total = orders.reduce((result, order) =>
    totalPriceItems(order) + result, 0);

  return (
    <>
      <OrderStyled>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
          {orders.length ?
            <OrderList>
              {orders.map(order => <OrderListItem order={order} />)}
            </OrderList> :
            <EmptyList>Список заказов пуст</EmptyList>}
        </OrderContent>
        <Total>
          <span>Итого</span>
          <span>5</span>
          <TotalPrice>
            {formatCurrency(total)}
          </TotalPrice>
        </Total>
        <ButtonCheckout>Оформить</ButtonCheckout>
      </OrderStyled>
    </>
  )
}
