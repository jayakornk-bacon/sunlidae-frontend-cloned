import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import ProvinceCard from '../../components/ProvinceCard';
import { spacing, Section } from '../../theme';

const ProvinceSection = () => {
  const [provinces, setProvince] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.myjson.com/bins/1h8t52',
      );
      setProvince(result.data);
    };
    fetchData();
  }, []);

  let ProvinceCards = '';
  if (provinces !== null) {
    ProvinceCards = provinces.map(province => (
      <Col col={3}>
        <ProvinceCard province={province} key={province.key} />
      </Col>
    ));
  }

  return (
    <Section spacing={spacing.medium} textCenter>
      <Container>
        <Row>
          <Col col={12}>
            <h2>Discover new unseen</h2>
            <p>Get your self into new environment and feel the nature. Discover local unseen place with local people.</p>
          </Col>
        </Row>
        <Row>
          {ProvinceCards}
        </Row>
      </Container>
    </Section>
  );
};

export default ProvinceSection;
