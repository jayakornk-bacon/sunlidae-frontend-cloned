import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import TripCard from '../../components/TripCard';
import { spacing, Section } from '../../theme';

const ProvinceSection = () => {
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.myjson.com/bins/umrl2',
      );
      setTrip(result.data);
    };
    fetchData();
  }, []);

  let TripCards = '';
  if (trip !== null) {
    TripCards = trip.map(place => (
      <Col col={3}>
        <TripCard trip={place} key={place.name} />
      </Col>
    ));
  }

  return (
    <Section spacing={spacing.mini} textCenter>
      <Container>
        <Row>
          <Col col={12}>
            <h2>Explore trips from local</h2>
            <p>Recommend trips and provide all information to you.</p>
          </Col>
        </Row>
        <Row>
          {TripCards}
        </Row>
      </Container>
    </Section>
  );
};

export default ProvinceSection;
