import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import { Search, spacing } from '../../theme';

const BannerSection = styled.div`
  background-image: url(/assets/bg-banner.jpg);
  background-attachment: scroll;
  background-size: cover;
  padding: ${props => props.spacing};
  height: auto;
  width: 100%;
`;

const SearchBox = styled.div`
  background-color: #fff;
  padding: 40px;
`;

const Banner = () => (
  <BannerSection spacing={spacing.huge}>
    <Container>
      <Row>
        <Col md={5} sm={6} mdOffset={7} smOffset={6}>
          <SearchBox>
            <h1>THE HEAVEN IS WAITING FOR YOU</h1>
            <p>Over a million of destination around the world is waiting for you to discover and feel it.</p>
            <h2>Where you want to go?</h2>
            <Search id="search-box" />
          </SearchBox>
        </Col>
      </Row>
    </Container>
  </BannerSection>
);

export default Banner;
