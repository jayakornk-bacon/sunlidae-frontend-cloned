import styled from 'styled-components/macro';

const Button = styled.button`
  background-color: ${({ outline, contrast, theme }) => ((outline && 'transparent')
    || (contrast && theme.contrast.idle)
    || theme.primary.idle)};
  color: ${({ outline, contrast, theme }) => (outline && contrast && theme.contrast.idle)
    || (outline && theme.primary.idle)
    || '#fff'};
  padding: .5rem 3.25rem;
  cursor: pointer;
  border-radius: 5rem;
  border: 1px solid ${({ contrast, theme }) => (contrast && theme.contrast.idle)
    || theme.primary.idle};
  font-weight: 700;
  outline: none;
  text-transform: uppercase;
  transition: all .3s;

  &:hover {
    background-color: ${({ outline, contrast, theme }) => (outline && contrast && theme.contrast.idle)
      || (outline && theme.primary.idle)
      || (contrast && theme.contrast.hover)
      || theme.primary.hover};
    border-color: ${({ outline, contrast, theme }) => (outline && contrast && theme.contrast.idle)
      || (outline && theme.primary.idle)
      || (contrast && theme.contrast.hover)
      || theme.primary.hover};
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
