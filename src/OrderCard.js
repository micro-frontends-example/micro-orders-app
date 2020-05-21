import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: inline-block;
  max-width: 350px;
  margin: 4px;
  border: 1px solid black;
`;

const CardTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin: 10px;
`;

const CardTitle = styled.h2`
  margin: 0;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 20px;
  margin: 10px;
`;

const host = process.env.REACT_APP_CONTENT_HOST;

const OrderCard = ({ order }) => {
  let imageSrc = `${host}${order.imageSrc}`;
  return (
    <Card>
      <CardTitleRow>
        <Img src={imageSrc} alt={order.imageDescription} />
        <CardTitle>{order.type}</CardTitle>
      </CardTitleRow>
      <Description>{order.number}</Description>
    </Card>
  );
};

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageDescription: PropTypes.string.isRequired
  }).isRequired
};

export default OrderCard;
