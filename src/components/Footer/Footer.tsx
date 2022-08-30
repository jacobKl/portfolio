import * as React from 'react'
import { Context } from '../../context/ContextProvider'
import { FooterWrapper } from './Footer.styled'
import { StyledColumn, StyledContainer, StyledRow } from '../GlobalStyle'
 
const Footer = () => {
  const { state, dispatch } = React.useContext<any>(Context)

  const { languageMode }: { languageMode: string } = state;

  return (
    <FooterWrapper>
     <StyledContainer>
        <StyledRow>
            <StyledColumn>
                <p>Copyright &copy; JK 2022</p>
            </StyledColumn>
        </StyledRow>
     </StyledContainer>
    </FooterWrapper>
  )
}
export default Footer

