import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Button from "../Button/Button"
import { StyledColumn, StyledContainer, StyledRow, StyledSectionHeader } from "../GlobalStyle"

const Timeline = (): JSX.Element => {
  return (
    <TimelineWrapper id="experience">
        <StyledContainer>
            <StyledRow>
                <StyledColumn>
                    <StyledTimeline>
                        <StyledTimelineRow>
                            <StyledTimelineCol variant={"right"}>2018</StyledTimelineCol>
                            <StyledTimelineIcon />
                            <StyledTimelineCol variant={'left'}></StyledTimelineCol>
                        </StyledTimelineRow>
                        <StyledTimelineStep height={"30"}/>
                        <StyledTimelineRow>
                            <StyledTimelineCol variant={'right'}/>
                            <StyledTimelineIcon>
                                <StaticImage src={'../../../public/static/zsl.png'} alt='Politechnika Krakowska' />
                            </StyledTimelineIcon>
                            <StyledTimelineCol variant={"left"}>
                                <span>09.2018</span>
                                <h6>Zespół Szkół Łączności</h6>
                            </StyledTimelineCol>
                        </StyledTimelineRow>
                        <StyledTimelineStep height={"100"}/>
                        <StyledTimelineRow>
                            <StyledTimelineCol variant={"right"}>
                                <span>05.2020 - 06.2020</span>
                                <h6>Krakweb</h6>
                            </StyledTimelineCol>
                            <StyledTimelineIcon>
                                <StaticImage src={'../../../public/static/krakweb.png'} alt='Politechnika Krakowska' />
                            </StyledTimelineIcon>
                            <StyledTimelineCol variant={'left'}>
                                Praktyka
                            </StyledTimelineCol>
                        </StyledTimelineRow>
                        <StyledTimelineStep height={"30"}/>
                        <StyledTimelineRow>
                            <StyledTimelineCol variant={"right"}>
                                Fullstack Web Developer
                            </StyledTimelineCol>
                            <StyledTimelineIcon>
                                <StaticImage src={'../../../public/static/krakweb.png'} alt='Politechnika Krakowska' />
                            </StyledTimelineIcon>
                            <StyledTimelineCol variant={"left"}>
                                <span>06.2020 - obecnie</span>
                                <h6>Krakweb</h6>
                            </StyledTimelineCol>
                        </StyledTimelineRow>
                        <StyledTimelineStep height={"100"}/>
                        <StyledTimelineRow>
                            <StyledTimelineCol variant={"right"}>
                                Informatyka
                            </StyledTimelineCol>
                            <StyledTimelineIcon>
                                <StaticImage src={'../../../public/static/pk.jpg'} alt='Politechnika Krakowska' />
                            </StyledTimelineIcon>
                            <StyledTimelineCol variant={"left"}>
                                <span>09.2022</span>
                                <h6>Politechnika Krakowska</h6>
                            </StyledTimelineCol>
                        </StyledTimelineRow>
                    </StyledTimeline>
                </StyledColumn>
                <StyledColumn style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <StyledSectionHeader>
                        <span>02.</span>
                        Doświadczenie
                    </StyledSectionHeader>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, non nobis quis doloribus aliquam et! Officia expedita accusamus placeat doloribus?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero alias ratione dolores corrupti, nostrum voluptatibus, dolore maiores quaerat eveniet ipsam laudantium rem quisquam eius vel ad sequi explicabo. Minima praesentium similique dolores molestiae voluptates neque ducimus exercitationem eaque fuga!
                    </p>
                    <Button text={'Pobierz moje CV'} variant={'primary'} anchor={'#'} style={{alignSelf: 'start'}}/>
                </StyledColumn>
            </StyledRow>
        </StyledContainer>
    </TimelineWrapper>
  )
}

const TimelineWrapper = styled.section`
    background-color: ${props => props.theme.light};
    margin: 0;
`;

const StyledTimeline = styled.div `
    display: flex;
    flex-direction: column;
    padding: 40px;
`;

const StyledTimelineRow = styled.div `
    display: flex;
    align-items: center;    
`;

const StyledTimelineCol = styled.div<{ variant: string }> `
    flex: 2 0 40%;

    text-align: ${ props => props.variant };

    span {
        color: #ccc;
        font-size: 12px;
    }

    h6 {
        margin: 0;
    }
`;

const StyledTimelineIcon = styled.div `
    width: 50px !important;
    height: 50px !important;
    border-radius: 25px;
    border: 2px solid ${props => props.theme.primary};
    margin: 0 10px;
    overflow: hidden;

    img {
        object-fit: cover;
        padding: 8px;
    }
`;

const StyledTimelineStep = styled.div<{height: string}> `
    height: ${props => props.height}px;
    width: 2px;
    background: ${props => props.theme.black};
    margin: 3px auto;
`;
export default Timeline