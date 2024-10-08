import { StaticImage } from "gatsby-plugin-image"
import { Context } from "../../context/ContextProvider"
import TimelineUi from "./Timeline.ui"
import React from "react"
import Button from "../Button/Button"
import { StyledColumn, StyledContainer, StyledRow, StyledSectionHeader } from "../GlobalStyle"
import { StyledTimeline, StyledTimelineCol, StyledTimelineIcon, StyledTimelineRow, StyledTimelineStep, TimelineWrapper } from "./Timeline.styled"

const Timeline = (): JSX.Element => {

  const { state } = React.useContext<any>(Context)
  const { languageMode } : { languageMode: string } = state;

  return (
    <TimelineWrapper id="experience">
        <StyledContainer>
            <StyledRow>
                <StyledColumn>
                    <StyledTimeline>
                        <StyledTimelineRow>
                            <StyledTimelineCol variant={'right'}/>
                            <StyledTimelineIcon>
                                <StaticImage src={'../../assets/zsl.png'} alt='Politechnika Krakowska' />
                            </StyledTimelineIcon>
                            <StyledTimelineCol variant={"left"}>
                                <span>09.2018</span>
                                <h6>{TimelineUi[languageMode].highschool}</h6>
                            </StyledTimelineCol>
                        </StyledTimelineRow>
                        <StyledTimelineStep height={"30"}/>
                        <StyledTimelineRow>
                            <StyledTimelineCol variant={"right"}>
                                Fullstack Web Developer
                            </StyledTimelineCol>
                            <StyledTimelineIcon>
                                <StaticImage src={'../../assets/krakweb.png'} alt='Politechnika Krakowska' />
                            </StyledTimelineIcon>
                            <StyledTimelineCol variant={"left"}>
                                <span>06.2020 - 01.2024</span>
                                <h6>Krakweb</h6>
                            </StyledTimelineCol>
                        </StyledTimelineRow>
                        <StyledTimelineStep height={"50"}/>
                        <StyledTimelineRow>
                            <StyledTimelineCol variant={"right"}>
                                {TimelineUi[languageMode].it}
                            </StyledTimelineCol>
                            <StyledTimelineIcon>
                                <StaticImage src={'../../assets/pk.jpg'} alt='Politechnika Krakowska' />
                            </StyledTimelineIcon>
                            <StyledTimelineCol variant={"left"}>
                                <span>09.2022</span>
                                <h6>{TimelineUi[languageMode].uni}</h6>
                            </StyledTimelineCol>
                        </StyledTimelineRow>
                        <StyledTimelineStep height={"50"}/>
                        <StyledTimelineRow>
                            <StyledTimelineCol variant={"left"}>
                            </StyledTimelineCol>
                            <StyledTimelineIcon>
                                <StaticImage src={'../../assets/drblitz.png'} alt='DrBlitz Weblab' />
                            </StyledTimelineIcon>
                            <StyledTimelineCol variant={"rights"}>
                                <span>01.04.2024 - 08.2024</span>
                                <h6>DrBlitz Weblab</h6>
                            </StyledTimelineCol>
                        </StyledTimelineRow>
                        <StyledTimelineStep height={"20"}/>
                        <StyledTimelineRow>
                            <StyledTimelineCol variant={"right"}>
                                <span>08.20244</span>
                                <h6>Adream</h6>
                            </StyledTimelineCol>
                            <StyledTimelineIcon>
                                <StaticImage src={'../../assets/adream.png'} alt='Adream' />
                            </StyledTimelineIcon>
                            <StyledTimelineCol></StyledTimelineCol>
                        </StyledTimelineRow>
                    </StyledTimeline>
                </StyledColumn>
                <StyledColumn style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: "1rem"}}>
                    <StyledSectionHeader>
                        <span>02.</span>
                        {TimelineUi[languageMode].experience}
                    </StyledSectionHeader>
                    <p>
                        {TimelineUi[languageMode].experienceParagraph1}
                    </p>
                    <p>
                        {TimelineUi[languageMode].experienceParagraph2}
                    </p>
                    <Button text={TimelineUi[languageMode].getCv} variant={'primary'} anchor={'/CV_KLIMEK.pdf'} target={'_blank'} style={{alignSelf: 'start'}}/>
                </StyledColumn>
            </StyledRow>
        </StyledContainer>
    </TimelineWrapper>
  )
}

export default Timeline