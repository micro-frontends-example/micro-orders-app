import React from 'react';
import styled from 'styled-components';
import OrderCard from './OrderCard';

const OrdersList = ({ orders }) => {

  const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 30px;
  margin-right: 550px;
`;

  const OrderTable = styled.table`
`;

  const OrderRow = styled.tr`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

  const OrderContent = styled.td`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

  return (
    <CardContainer>
      <OrderTable>
        {orders.map(order => (
          <OrderRow>
            <OrderContent>
              <OrderCard key={order.id} order={order} />
            </OrderContent>
          </OrderRow>
        ))}
      </OrderTable>
    </CardContainer>
  );
};

export default OrdersList;
