import * as React from 'react'
import { StyledRow, StyledContainer } from '../GlobalStyle'
import UI from './Hero.ui'
import { Context } from '../../context/ContextProvider'
import Button from '../Button/Button'
import { StyledHeroLeftColumn, StyledHeroSection, StyledHeroSummary, StyledHi, StyledLeftInvertedSvg, StyledLeftSvg, StyledDots } from './Hero.styled'
import left from '../../assets/left.svg';

const Hero: React.FC = () => {
    const { state } = React.useContext<any>(Context)
    const { languageMode } : { languageMode: string } = state;
    const [ innerWidth, setInnerWidth ] = React.useState(0);
    
    React.useEffect(() => {
        setInnerWidth(window.innerWidth);
    })

    return (
        <StyledHeroSection>
            { innerWidth >= 986 ? <StyledLeftSvg src={left}/> : null }
            <StyledLeftInvertedSvg src={left}/>
            <StyledContainer>
                <StyledHeroLeftColumn style={{height: '90vh'}}>
                    <StyledHi>
                        {UI[languageMode].hi}
                    </StyledHi>
                    <h1>
                        {UI[languageMode].name} <span>Jakub Klimek</span> <br/>
                        {UI[languageMode].iam} <span>{UI[languageMode].developer}</span>
                    </h1>

                    <StyledHeroSummary>
                        {UI[languageMode].summary}
                    </StyledHeroSummary>
                        
                    <StyledRow style={{'margin': 0}}>
                        <Button text={UI[languageMode].contact} variant={'primary'} href={'#'} />
                        <Button text={UI[languageMode].projects} variant={'text'} href={'#'} />
                    </StyledRow>
                </StyledHeroLeftColumn>
            </StyledContainer>
        </StyledHeroSection>
    );
}

export default Hero