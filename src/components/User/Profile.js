/* eslint-disable max-len */
import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components/macro';

const UserImage = styled.img`
  border-radius: .4rem;
  width: 100%;
  max-width: 285px;
  margin-bottom: 4rem;
`;

const UsernameWrapper = styled.div`
  > h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: -.25rem;
    position: relative;

    &::after {
      content: 'Admin';
      background-color: #FFD700;
      border-radius: .5rem;
      font-size: 1.5rem;
      margin-left: .5rem;
      padding: .25rem 1rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  > span {
    color: #8D989D;
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

const UserStat = styled.div`
  display: flex;
  margin: 1rem 0;

  > strong {
    font-family: ${({ theme }) => theme.fontHead};
    font-size: 1.6rem;

    &::after {
      content: attr(data-stat-name);
      color: #101010;
      font-family: ${({ theme }) => theme.fontBody};
      font-size: 1.6rem;
      font-weight: 700;
      margin-left: 1rem;
    }
  }

  > strong + strong {
    margin-left: 2rem;
  }
`;

const UserDesc = styled.div`
  /* width: 80%; */
  > p {
    color: #68767C;
    font-size: 1.6rem;
    line-height: 1.4;
  }
`;

const Hr = styled.hr`
  border-color: #9A9A9A;
  margin: 3.5rem 0 0;
`;

const UserInfo = styled.div`
  > strong {
    display: block;
    font-size: 1.6rem;
    font-weight: 700;
    margin: 3.6rem 0 1.2rem;
  }
`;

const Badges = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > div {
    background-color: #EDEDED;
    border-radius: 2rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1;
    padding: 1rem;
  }

  > div + div {
    margin-left: 1rem;
  }
`;

const UserLocation = styled.p`
  color: #9A9A9A;
  font-size: 1.6rem;
`;

const H2 = styled.h2`
  font-size: 3rem;
  font-weight: 700;
`;

// const UserInfo = styled.div`
//   border: 1px solid ${({ theme }) => theme.accent4};
//   border-radius: 4px;
//   padding: 3rem 2.5rem;
// `;

const UserProfile = () => (
  <Container>
    <Row>
      <Col col="3">
        <UserImage src="https://avatars1.githubusercontent.com/u/46859480?s=400&u=014176c78d3258c10aafc476fd35ef4fd7448b53&v=4" alt="" />
        <div>
          <UsernameWrapper>
            <h1>jayakornk</h1>
            {/* <span>Jayakorn Karikan</span> */}
          </UsernameWrapper>
          <UserStat>
            <strong data-stat-name="Trips">1,022</strong>
            <strong data-stat-name="Followers">47.2k</strong>
          </UserStat>
          <UserDesc>
            <p>Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่ 16 เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง</p>
          </UserDesc>
          <Hr />
          <UserInfo>
            <strong>Travel styles</strong>
            <Badges>
              <div>⛰ภูเขา</div>
              <div>🏖 ทะเล</div>
            </Badges>
            <strong>Location</strong>
            <UserLocation>Bangkok, Thailand</UserLocation>
          </UserInfo>
        </div>
      </Col>
      <Col col="8" offset="1">
        <div className="mt-5">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <H2>Trips</H2>
            <Badges>
              <div>In 2018</div>
            </Badges>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default UserProfile;
