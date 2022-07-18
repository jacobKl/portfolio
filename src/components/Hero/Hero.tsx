import * as React from 'react'
import { HeroWrapper, HeroContent, HeroImageWrapper, HeroTitle, HeroSubtitle, HeroImage } from './Hero.styled'
import { StyledRow } from '../GlobalStyle'
import UI from './Hero.ui'
import { Context } from '../../context/ContextProvider'
import Button from '../Button/Button'

const Hero = () => {
    const { state: { languageMode } } = React.useContext(Context)

    return (
        <HeroWrapper>
            <HeroContent>
                <HeroSubtitle>Fullstack Developer</HeroSubtitle>
                <HeroTitle>Jakub Klimek</HeroTitle>
                <p>
                    {UI[languageMode].summary}
                </p>
                <StyledRow>
                    <Button text={UI[languageMode].aboutMe} variant={'outlineDark'} anchor={"#"}/>
                    <Button text={UI[languageMode].contact} variant={'blue'} anchor={"#"}/>
                </StyledRow>
            </HeroContent>
            <HeroImageWrapper>
                
            </HeroImageWrapper>
        </HeroWrapper>
    );
}

export default Hero