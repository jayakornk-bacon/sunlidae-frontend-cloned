import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Form = styled.form`
  position: relative;
`;

const Input = styled.input`
  border: 1px solid #DCDCDC;
  border-radius: 5rem;
  outline: none;
  margin: 0;
  padding: .5rem 4.5rem .5rem 2.5rem;
  width: 100%;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.accent};
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
