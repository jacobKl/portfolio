import React from 'react'
import styled from 'styled-components';
import { StyledContainer } from '../GlobalStyle';

const ShortFooter = () => {
  return (
    <StyledFooter>
        <StyledContainer>
            Jakub Klimek - FullStack developer.
        </StyledContainer>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    width: 100%;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.light};
    padding: 20px 0;
`;

export default ShortFooter