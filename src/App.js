import { createBrowserHistory } from 'history';
import React, { useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import OrdersList from './OrdersList';
import Loading from './Loading';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

const defaultHistory = createBrowserHistory();

export const App = ({ history }) => {

  const [orders, setOrders] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const host = process.env.REACT_APP_CONTENT_HOST;
    fetch(`${host}/orders.json`)
      .then(result => result.json())
      .then(orders => {
        setOrders(orders);
        setLoading(false);
      })
      .catch(() => {
        setOrders({})
      });
  }, [history]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history || defaultHistory}>
      <MainColumn>
        <OrdersList
          orders={orders}
        />
      </MainColumn>
    </Router>
  );
};

export default App;
