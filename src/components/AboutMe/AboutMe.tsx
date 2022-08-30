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
                            <StaticImage src={'../../../public/static/me.jpeg'} alt="Me" placeholder="blurred"></StaticImage>
                            <StyledRightSvg src={'/static/right.svg'}/>
                        </div>
                    </StyledImageWrapper>
                    <StyledAboutMeContent>
                        <StyledSectionHeader>
                            <span>01.</span> O mnie
                        </StyledSectionHeader>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, deleniti? Saepe cum eaque porro distinctio expedita fugiat odit nulla magnam?
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veniam ducimus cupiditate iure atque aliquam culpa, molestias totam necessitatibus at sint deleniti, voluptas harum qui. Veritatis necessitatibus et quaerat earum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi saepe delectus non modi culpa! Dolorem numquam laborum fugit eaque quisquam.
                        </p>
                        <h5>
                            Technologie
                        </h5>
                        <ul>
                            <li>JavaScript (ES6)</li>
                            <li>PHP</li>
                            <li>Express / Node.js</li>
                            <li>React</li>
                            <li>HTML / CSS / SCS</li>
                            <li>WordPress</li>
                        </ul>
                    </StyledAboutMeContent>
                </StyledRow>
            </StyledContainer>
        </AboutMeWrapper>
    );
}

export default AboutMe;