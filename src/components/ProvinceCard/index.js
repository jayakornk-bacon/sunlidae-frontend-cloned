import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  margin: 5px auto 0;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 50px;
  color: #fff;
`;

function ProvinceCard(props) {
  const { province } = props;

  const Card = styled.div`
    padding: 15px;
    margin-top: 20px;
    background-image: url('${province.img_url}');
    background-size: cover;
    background-position: center center;
    min-height: 280px;
    position: relative;
    border-radius: 5px;
  `;

  return (
    <Card>
      <Title>{province.name}</Title>
    </Card>
  );
}

export default ProvinceCard;
