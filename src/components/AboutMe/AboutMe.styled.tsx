import styled from "styled-components";
import underlay from '../../assets/underlay.webp'

export const AboutMeWrapper = styled.div `
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background: ${props => props.theme.white};
    color: ${props => props.theme.black};
    align-items: center;
    justify-content: center;
    background-image: ${props => props.theme.dark ? "" : `url(${underlay})`};
    background-size: cover;
    background-position: 0 100%;
    padding-bottom: 50px;
`;

export const StyledImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    background: ${props => props.theme.white};
    position: relative;
    padding-right: 80px;

    img {
        border-radius: 50%;
        padding: 20px 40px;
        overflow: hidden;
        filter: drop-shadow(15px 10px 4px rgba(0,0,0,0.2));
    }
    @media (max-width: 986px) {
        flex: 1 0 100%;
        padding: 0;
    }
`;

export const StyledRightSvg = styled.img`
    position: absolute;
    right: 0%;
    bottom: 0%;
    border-radius: 0 !important;
    max-width: 40%;
`;

export const StyledAboutMeContent = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
        margin-bottom: 5px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        max-width: 100%;
        list-style-type: none;
    }

    li {
        flex: 1 0 50%;
        max-width: 50%;

        &:before {
            content: '>';
            color: ${props => props.theme.primary};
            padding-right: 5px;
            font-weight: 900;
        }
    }

    h5 {
        font-weight: 300;
        font-size: 20px;
        margin-bottom: 5px;
    }

    @media (max-width: 986px) {
        flex: 1 0 100%;
        padding-bottom: 50px;
    }
`;

export const StyledTech = styled.div`
    background: ${props => props.theme.light};
    padding: 20px;
    border-radius: .4rem;
    margin-top: 20px;

    p {
        margin-top: 0;
        font-size: 18px;
    }
`;