import styled from 'styled-components/macro';

const Section = styled.section`
  padding: ${({ spacing = 'mini', theme }) => theme.spacing[spacing]};
  text-align: ${({ align = 'left' }) => align};
`;

export default Section;
