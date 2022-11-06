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
                                <h6>{TimelineUi[languageMode].highschool}</h6>
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
                                {TimelineUi[languageMode].practise}
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
                                <span>06.2020 - {TimelineUi[languageMode].now}</span>
                                <h6>Krakweb</h6>
                            </StyledTimelineCol>
                        </StyledTimelineRow>
                        <StyledTimelineStep height={"100"}/>
                        <StyledTimelineRow>
                            <StyledTimelineCol variant={"right"}>
                                {TimelineUi[languageMode].it}
                            </StyledTimelineCol>
                            <StyledTimelineIcon>
                                <StaticImage src={'../../../public/static/pk.jpg'} alt='Politechnika Krakowska' />
                            </StyledTimelineIcon>
                            <StyledTimelineCol variant={"left"}>
                                <span>09.2022</span>
                                <h6>{TimelineUi[languageMode].highschool}</h6>
                            </StyledTimelineCol>
                        </StyledTimelineRow>
                    </StyledTimeline>
                </StyledColumn>
                <StyledColumn style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
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
                    <Button text={TimelineUi[languageMode].getCv} variant={'primary'} anchor={'#'} style={{alignSelf: 'start'}}/>
                </StyledColumn>
            </StyledRow>
        </StyledContainer>
    </TimelineWrapper>
  )
}

export default Timeline