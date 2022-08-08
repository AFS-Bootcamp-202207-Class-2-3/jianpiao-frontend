import React from 'react';
import OrderItem from './OrderItem';

const OrderList = (props) => {

    return props.orders.map((order) => {return <OrderItem key={order.id} order={order}/>});;
};

export default OrderList;