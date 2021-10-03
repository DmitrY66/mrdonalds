/* eslint-disable no-unused-vars */

export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = value => value.toLocaleString(`ru-Ru`, { style: 'currency', currency: 'RUB' });
