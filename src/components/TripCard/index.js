import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 25%;
`;

function TripCard(props) {
  const { trip } = props;

  return (
    <Card>
      <img src={trip.blogger_img} alt={trip.name} />
      <p>
        {trip.day}
        วัน
      </p>
      <h3>{trip.name}</h3>
      <p>{trip.desc}</p>
      <div className="blogger">
        <h4>{trip.blogger_name}</h4>
      </div>
    </Card>
  );
}

export default TripCard;
