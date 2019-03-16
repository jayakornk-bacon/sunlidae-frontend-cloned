import React from 'react';
import styled from 'styled-components/macro';
import { Col } from 'styled-bootstrap-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const A = styled.a`
  background-color: #FFFFFF;
  border-radius: .4rem;
  display: block;
  text-align: center;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0 .6rem 1.8rem rgba(0, 0, 0, 0.15);
    text-decoration: none;
  }
`;

const Header = styled.div`
  padding: 1.8rem 0;
`;

const Title = styled.h3`
  color: #101010;
  font-size: 2rem;
  font-weight: 700;
`;

const Desc = styled.p`
  color: #767676;
  font-size: 1.6rem;
  margin: 0;
`;

const Featured = styled.div`
  position: relative;
`;

const FeaturedImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const FearturedInfo = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  font-size: 1.4rem;
  font-weight: 700;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2.5rem;

  > span {
    display: block;
    margin: 0 .65rem;
  }
`;

const FearturedInfoStyled = ({ time, price }) => (
  <FearturedInfo>
    <span>
      <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
      {time}
    </span>
    <span>
      <FontAwesomeIcon icon={['far', 'dollar-sign']} className="mr-1" />
      {price}
    </span>
  </FearturedInfo>
);

const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .8rem;

  > img {
    border-radius: .4rem;
    object-fit: cover;
    padding: .25rem;
    width: 100%;
    max-width: calc(5.5rem - .25rem);
  }
`;

const UserTrip = ({ href }) => (
  <Col col="4" className="mb-5">
    <A href={href}>
      <Header>
        <Title>Bromo, Indonesia</Title>
        <Desc>ภูเขาไฟสวยกว่านี้ไม่มีอีกแล้ว</Desc>
      </Header>
      <Featured>
        <FeaturedImg src={`${process.env.PUBLIC_URL}/img/Intersection 12@2x.png`} />
        <FearturedInfoStyled time="3 Days" price="Cheap" />
      </Featured>
      <Gallery>
        <img src={`${process.env.PUBLIC_URL}/img/Intersection 13@2x.png`} alt="x" />
        <img src={`${process.env.PUBLIC_URL}/img/Intersection 14@2x.png`} alt="x" />
        <img src={`${process.env.PUBLIC_URL}/img/Intersection 15@2x.png`} alt="x" />
        <img src={`${process.env.PUBLIC_URL}/img/Intersection 16@2x.png`} alt="x" />
      </Gallery>
    </A>
  </Col>
);

export default UserTrip;
