import { StaticImage } from "gatsby-plugin-image";
import { Context } from "../../context/ContextProvider";
import TimelineUi from "./Timeline.ui";
import React from "react";
import Button from "../Button/Button";
import { StyledColumn, StyledContainer, StyledRow, StyledSectionHeader } from "../GlobalStyle";
import {
  StyledTimeline,
  StyledTimelineCol,
  StyledTimelineIcon,
  StyledTimelineRow,
  StyledTimelineStep,
  TimelineWrapper,
  StyledTimelinePlace,
  StyledTimelineTop,
  StyledTimelineBottom,
} from "./Timeline.styled";

const Timeline = (): JSX.Element => {
  const { state } = React.useContext<any>(Context);
  const { languageMode }: { languageMode: string } = state;

  return (
    <TimelineWrapper id="experience">
      <StyledContainer>
        <StyledColumn style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <StyledSectionHeader>
            {TimelineUi[languageMode].experience}
          </StyledSectionHeader>
          <p>{TimelineUi[languageMode].experienceParagraph1}</p>
          <p>{TimelineUi[languageMode].experienceParagraph2}</p>
          <div>
            <Button text={TimelineUi[languageMode].getCv} variant={"primary"} anchor={"/CV_KLIMEK.pdf"} target={"_blank"} style={{ alignSelf: "start" }} />
          </div>
        </StyledColumn>
        <StyledColumn>
          <StyledTimeline>
            <StyledTimelineCol>
              <StyledTimelineTop>
                <p className="place">ZSŁ Kraków</p>
              </StyledTimelineTop>
              <StyledTimelinePlace>
                <StaticImage src={"../../assets/zsl.png"} alt="Zespół Szkół Łączności" />
              </StyledTimelinePlace>
              <StyledTimelineBottom>
                <p>Technik Informatyk</p>
                <p className="time">09.2018 - 05.2022</p>
              </StyledTimelineBottom>
            </StyledTimelineCol>

            <StyledTimelineCol>
              <StyledTimelineTop>
                <p className="place">Krakweb</p>
              </StyledTimelineTop>
              <StyledTimelinePlace>
                <StaticImage src={"../../assets/krakweb.png"} alt="Krakweb" />
              </StyledTimelinePlace>
              <StyledTimelineBottom>
                <p>Fullstack Developer</p>
                <p className="time">06.2020 - 01.2024</p>
              </StyledTimelineBottom>
            </StyledTimelineCol>

            <StyledTimelineCol>
              <StyledTimelineTop>
                <p className="place">Politechnika Krakowska</p>
              </StyledTimelineTop>
              <StyledTimelinePlace>
                <StaticImage src={"../../assets/pk.jpg"} alt="Politechnika Krakowska" />
              </StyledTimelinePlace>
              <StyledTimelineBottom>
                <p>Informatyka</p>
                <p className="time">09.2022</p>
              </StyledTimelineBottom>
            </StyledTimelineCol>

            <StyledTimelineCol>
              <StyledTimelineTop>
                <p className="place">DrBlitz WebLab</p>
              </StyledTimelineTop>
              <StyledTimelinePlace>
                <StaticImage src={"../../assets/drblitz.png"} alt="DrBlitzWeblab" />
              </StyledTimelinePlace>
              <StyledTimelineBottom>
                <p>PHP & TYPO3 Developer</p>
                <p className="time">04.2024 - 08.2024</p>
              </StyledTimelineBottom>
            </StyledTimelineCol>

            <StyledTimelineCol>
              <StyledTimelineTop>
                <p className="place">ADream</p>
              </StyledTimelineTop>
              <StyledTimelinePlace>
                <StaticImage src={"../../assets/adream.png"} alt="ADream" />
              </StyledTimelinePlace>
              <StyledTimelineBottom>
                <p>Fullstack Developer</p>
                <p className="time">08.2024</p>
              </StyledTimelineBottom>
            </StyledTimelineCol>
          </StyledTimeline>
        </StyledColumn>
      </StyledContainer>
    </TimelineWrapper>
  );
};

export default Timeline;
