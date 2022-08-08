import React from 'react';
import OrderItem from './OrderItem';

const OrderList = () => {
    const arr = Array(3).fill(0);

    return arr.map((_,index) => <OrderItem/>);;
};

export default OrderList;