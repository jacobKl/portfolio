import * as React from 'react';
import { StyledRow, StyledColumn, StyledContainer, StyledSectionHeader } from '../GlobalStyle';
import { AboutMeWrapper, StyledImageWrapper, StyledRightSvg, StyledAboutMeContent, StyledTech } from './AboutMe.styled';

import UI from './AboutMe.ui'
import { Context } from '../../context/ContextProvider'
import { StaticImage } from 'gatsby-plugin-image';
import right from '../../assets/right.svg'

const AboutMe: React.FC = (): JSX.Element => {

    const { state } = React.useContext<any>(Context)
    const { languageMode } : { languageMode: string } = state;

    return (
        <AboutMeWrapper id="about-me">  
            <StyledContainer>
                <StyledRow>
                    <StyledImageWrapper>
                        <div>
                            <StaticImage src={'../../assets/me.jpeg'} alt="Me" placeholder="blurred"></StaticImage>
                            <StyledRightSvg src={right}/>
                        </div>
                    </StyledImageWrapper>
                    <StyledAboutMeContent>
                        <StyledSectionHeader>
                            <span>01.</span> {UI[languageMode].aboutMe}
                        </StyledSectionHeader>
                        <p>
                            {UI[languageMode].aboutMeParagraph1}
                        </p>
                        <p>
                            {UI[languageMode].aboutMeParagraph2}
                        </p>
                        <StyledTech>
                            <h5>
                                {UI[languageMode].tech}
                            </h5>
                            <ul>
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>JavaScript + TypeScript</li>
                                <li>React + Gatsby</li>
                                <li>HTML / CSS / SCSS</li>
                                <li>WordPress</li>
                                <li>SQL</li>
                                <li>GraphQL</li>
                            </ul>
                        </StyledTech>
                    </StyledAboutMeContent>
                </StyledRow>
            </StyledContainer>
        </AboutMeWrapper>
    );
}

export default AboutMe;