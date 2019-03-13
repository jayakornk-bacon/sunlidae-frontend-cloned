// import { useState, useEffect } from 'react';
import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import TripSection from '../../containers/TripSection';
import ProvinceSection from '../../containers/ProvinceSection';
import {
  Button, spacing, Section, Search,
} from '../../theme';

const BGFooter = styled.div`
  padding: 100px 40px 100px 70px;
  margin-top: 20px;
  background-image: url('https://blog.traveloka.com/source/uploads/sites/5/2017/12/shutterstock_721752283.jpg');
  background-position: center center;
  background-size: cover;
  position: relative;
  border-radius: 5px;
  text-align: left;
  color: #fff;
`;

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

const Homepage = () => (
  <div>
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

    <ProvinceSection />
    <TripSection />

    <Section spacing={spacing.medium}>
      <Container>
        <Row>
          <Col col={12}>
            <BGFooter>
              <h1>
                สร้างเรื่องราวการท่องเที่ยวแบบใหม่
                <br />
                อีกทั้งยังทำเงินให้คุณได้ด้วย
              </h1>
              <Button>Normal</Button>
            </BGFooter>
          </Col>
        </Row>
      </Container>
    </Section>
  </div>
);

export default Homepage;
