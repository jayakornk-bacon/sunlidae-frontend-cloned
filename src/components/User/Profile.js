/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components/macro';
import { darken } from 'polished';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Section from '../../theme/components/Section';
import Chip from '../../theme/components/Chip';
import Trip from './Trip';

const SectionBg = styled(Section)`
  background-image: url('${`${process.env.PUBLIC_URL}/img/user_bg.svg`}');
  background-position: right 80%;
  background-repeat: no-repeat;
`;

const User = styled.div`
  margin-bottom: 4rem;
  position: relative;
`;

const UserImage = styled.img`
  border-radius: .4rem;
  width: 100%;
  max-width: 285px;
`;

const UserSocials = styled.div`
  display: flex;
  position: absolute;
  bottom: 1.25rem;
  right: 1.5rem;
`;

const UserSocial = styled.a`
  color: #fff;
  font-size: 2.4rem;
  line-height: 0;
  text-decoration: none;
  transition: color .3s;

  & + & {
    margin-left: 1.25rem;
  }

  &:hover {
    color: ${darken(0.16, '#fff')};
  }
`;

const UserName = styled.div`
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

const UserStyle = styled.div`
  > strong {
    display: block;
    font-size: 1.6rem;
    font-weight: 700;
    margin: 3.6rem 0 1.2rem;
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

const Related = styled.div`
  text-align: center;

  > img {
    border-radius: 50%;
    display: block;
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 auto 1.5rem;
  }
`;

const UserProfile = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get('https://randomuser.me/api?results=7&nat=us,gb');
      console.log(res.data.results);
      setUsers(res.data.results);
    };

    getUsers();
  }, []);

  return (
    <SectionBg spacing="small">
      <Container>
        <Row>
          <Col col="3">
            <User>
              <UserImage src="https://avatars1.githubusercontent.com/u/46859480?s=400&u=014176c78d3258c10aafc476fd35ef4fd7448b53&v=4" alt="" />
              <UserSocials>
                <UserSocial href="https://facebook.com"><FontAwesomeIcon icon={['fab', 'facebook']} /></UserSocial>
                <UserSocial href="https://instagram.com"><FontAwesomeIcon icon={['fab', 'instagram']} /></UserSocial>
              </UserSocials>
            </User>
            <div>
              <UserName>
                <h1>jayakornk</h1>
              </UserName>
              <UserStat>
                <strong data-stat-name="Trips">1,022</strong>
                <strong data-stat-name="Followers">47.2k</strong>
              </UserStat>
              <UserDesc>
                <p>Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่ 16 เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง</p>
              </UserDesc>
              <Hr />
              <UserStyle>
                <strong>Travel styles</strong>
                <Chip>⛰ภูเขา</Chip>
                <Chip tag="a" href="#">🏖 ทะเล</Chip>
                <strong>Location</strong>
                <UserLocation>Bangkok, Thailand</UserLocation>
              </UserStyle>
            </div>
          </Col>
          <Col col="8" offset="1">
            <div className="mt-5">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <H2>Trips</H2>
                <Chip>In 2018</Chip>
              </div>
            </div>
            <Row className="mt-5">
              <Trip href="#" />
              <Trip href="#" />
              <Trip href="#" />
              <Trip href="#" />
              <Trip href="#" />
              <Trip href="#" />
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col col="12">
            <H2>Related Travellers</H2>
          </Col>
          <Col className="d-flex align-items-center justify-content-around mt-5">
            {users.map(user => (
              <Related key={user.login.uuid}>
                <img src={user.picture.large} alt={user.email} />
                <span>{`${user.name.first.charAt(0).toUpperCase()}${user.name.first.slice(1)} ${user.name.last.slice(0, 1).toUpperCase()}.`}</span>
              </Related>
            ))}
          </Col>
        </Row>
      </Container>
    </SectionBg>
  );
};

export default UserProfile;
