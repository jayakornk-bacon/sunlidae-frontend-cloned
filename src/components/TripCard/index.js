import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  text-align: left;
  margin-top: 20px;
`;
const Title = styled.h3`
  margin: 5px auto 0;
`;

const Img = styled.img`
  margin-bottom: 20px;
  width: 100%;
  height: 150px;
  border-radius: 5px;
`;

const Desc = styled.p`
  margin-bottom: 0;
  margin-top: 10px;
`;

const Bloggler = styled.div`
  display: flex;
  margin-top: 15px;
`;

const BlogglerName = styled.h5` 
  margin-top: 10px;
`;

const BlogglerImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

function TripCard(props) {
  const { trip } = props;

  return (
    <Card>
      <Img src={trip.img_src} alt={trip.name} />
      <div>
        {trip.day}
        {' '}
        วัน
      </div>
      <Title>{trip.name}</Title>
      <Desc>{trip.desc}</Desc>
      <Bloggler>
        <BlogglerImg src={trip.blogger_img} alt={trip.blogger_name} />
        <BlogglerName>{trip.blogger_name}</BlogglerName>
      </Bloggler>
    </Card>
  );
}

export default TripCard;
