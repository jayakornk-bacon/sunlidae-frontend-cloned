import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import TripCard from '../../components/TripCard';
import { spacing, Section } from '../../theme';

const AllCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProvinceSection = () => {
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.myjson.com/bins/k3hyi',
      );
      setTrip(result.data);
    };
    fetchData();
  }, []);

  let TripCards = '';
  if (trip !== null) {
    TripCards = trip.map(place => (
      <TripCard trip={place} key={place.name} />
    ));
  }

  return (
    <Section spacing={spacing.medium} textCenter>
      <Container>
        <Row>
          <Col col={12}>
            <h2>Explore trips from local</h2>
            <p>Get your self into new environment and feel the nature. Discover local unseen place with local people.</p>

            <AllCard>{TripCards}</AllCard>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default ProvinceSection;
