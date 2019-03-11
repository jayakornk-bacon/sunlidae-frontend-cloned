import styled from 'styled-components';

const Section = styled.div`
  padding: ${props => props.spacing};
  text-align: ${props => (props.textCenter ? 'center' : 'right')};
`;

export default Section;
