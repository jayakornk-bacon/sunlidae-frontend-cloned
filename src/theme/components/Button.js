import styled from 'styled-components/macro';

const Button = styled.button`
  background-color: ${props => ((props.outline && 'transparent')
    || (props.contrast && props.theme.contrast.idle)
    || props.theme.primary.idle)};
  color: ${props => (props.outline && props.contrast && props.theme.contrast.idle)
    || (props.outline && props.theme.primary.idle)
    || '#fff'};
  padding: .9rem 3.25rem .6rem;
  cursor: pointer;
  border-radius: 5rem;
  border: 1px solid ${props => (props.contrast && props.theme.contrast.idle)
    || props.theme.primary.idle};
  font-weight: 700;
  outline: none;
  text-transform: uppercase;
  transition: all .3s;

  &:hover {
    background-color: ${props => (props.outline && props.contrast && props.theme.contrast.idle)
      || (props.outline && props.theme.primary.idle)
      || (props.contrast && props.theme.contrast.hover)
      || props.theme.primary.hover};
    border-color: ${props => (props.outline && props.contrast && props.theme.contrast.idle)
      || (props.outline && props.theme.primary.idle)
      || (props.contrast && props.theme.contrast.hover)
      || props.theme.primary.hover};
    color: #fff;
  }
`;

export default Button;
