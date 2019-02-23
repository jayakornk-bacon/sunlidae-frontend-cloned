import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Form = styled.form`
  display: inline-block;
  position: relative;
`;

const Input = styled.input`
  border: 1px solid #DCDCDC;
  border-radius: 5rem;
  font-weight: 700;
  outline: none;
  padding: .9rem 4.5rem .6rem 2.5rem;
`;

const Label = styled.label`
  color: ${props => props.theme.accent};
  cursor: pointer;
  line-height: 0;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;

const Search = ({ id }) => (
  <Form>
    <Label htmlFor={id}>
      <FontAwesomeIcon icon="search" />
    </Label>
    <Input id={id} type="text" placeholder="Search..." />
  </Form>
);

export default Search;
