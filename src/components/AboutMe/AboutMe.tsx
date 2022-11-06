import * as React from 'react';
import { StyledRow, StyledColumn, StyledContainer, StyledSectionHeader } from '../GlobalStyle';
import { AboutMeWrapper, StyledImageWrapper, StyledRightSvg, StyledAboutMeContent } from './AboutMe.styled';

import UI from './AboutMe.ui'
import { Context } from '../../context/ContextProvider'
import { StaticImage } from 'gatsby-plugin-image';

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
                            <StyledRightSvg src={'/right.svg'}/>
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
                        <p>
                            {UI[languageMode].aboutMeParagraph3}
                        </p>
                        <h5>
                            {UI[languageMode].tech}
                        </h5>
                        <ul>
                            <li>JavaScript (ES6)</li>
                            <li>PHP</li>
                            <li>Express / Node.js</li>
                            <li>React</li>
                            <li>HTML / CSS / SCSS</li>
                            <li>WordPress</li>
                        </ul>
                    </StyledAboutMeContent>
                </StyledRow>
            </StyledContainer>
        </AboutMeWrapper>
    );
}

export default AboutMe;