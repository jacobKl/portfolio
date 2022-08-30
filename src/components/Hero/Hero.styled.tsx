import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components'

export const StyledHeroLeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    height: 100%;
    position: relative;

    h1 {
        font-weight: 600;
        font-size: 3rem;
        position: relative;
        margin: 0;

        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -10px;
            max-width: 130px;
            height: 5px;
            border-radius: 2.5px;
            background: ${props => props.theme.primary};
            width: 100%;
        }
    }

    span {
        color: ${props => props.theme.primary};
    }
`;

export const StyledHi = styled.p`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 19px;
    margin: 0;
`;

export const StyledHeroSummary = styled.p`
    letter-spacing: .44px;
    font-size: 22px;
    line-height: 32px;
    margin: 40px 0; 
`;

export const StyledLeftSvg = styled.img`
    position: absolute;
    left: -5%;
    bottom: 0;
    transform: translateX(-40%) translateY(40%);
`;

export const StyledLeftInvertedSvg = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(50%) translateY(-50%);
    z-index: -1;
`;

export const StyledHeroSection = styled.section`
  position: relative;
  height: calc(100vh - 80px);
  z-index: 2;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;
