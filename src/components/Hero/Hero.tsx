import * as React from 'react'
import { StyledRow, StyledContainer } from '../GlobalStyle'
import UI from './Hero.ui'
import { Context } from '../../context/ContextProvider'
import Button from '../Button/Button'
import { StyledHeroLeftColumn, StyledHeroSection, StyledHeroSummary, StyledHi, StyledLeftInvertedSvg, StyledLeftSvg, StyledDots, StyledIconRow } from './Hero.styled'
import left from '../../assets/left.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


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

                    <StyledIconRow>
                        <a target="_blank" href="https://www.linkedin.com/in/jakub-klimek-b643071b1/">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a target="_blank" href="https://github.com/jacobKl">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </StyledIconRow>
                        
                    <StyledRow style={{'margin': 0}}>
                        <Button text={UI[languageMode].contact} variant={'primary'} anchor={'mailto:kqklimek@gmail.com'} />
                        <Button text={UI[languageMode].projects} variant={'text'} anchor={'#projects'} />
                    </StyledRow>
                </StyledHeroLeftColumn>
            </StyledContainer>
        </StyledHeroSection>
    );
}

export default Hero