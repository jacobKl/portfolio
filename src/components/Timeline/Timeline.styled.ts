import styled from "styled-components";

export const TimelineWrapper = styled.section`
    background-color: ${props => props.theme.light};
    margin: 0;

    *:not(a):not(span) {
        color: ${props => props.theme.black};
    }
`;

export const StyledTimeline = styled.div `
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    position: relative;


    &::before {
        content: '';
        height: 2px;
        position: absolute;
        display: block;
        width: 100%;
        top: 45%;
        background-color: ${props => props.theme.white};
    }

    @media (max-width: 991px) {
        flex-direction: column;

        &::before {
            display: none;
        }
    }
`;

export const StyledTimelineRow = styled.div `
    display: flex;
    align-items: center;    
`;

export const StyledTimelineCol = styled.div<{ variant: string }> `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 991px) {
        flex-direction: row;
        margin: 20px 0;
    }
`;

export const StyledTimelineIcon = styled.div `
    width: 50px !important;
    height: 50px !important;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 10px;
    overflow: hidden;

    .gatsby-image-wrapper {
        max-width: 50px;
    }

    img {
        object-fit: cover;
        padding: 8px;
    }
`;

export const StyledTimelineStep = styled.div<{width: string}> `
    width: ${props => props.width}px;
    height: 3px;
    background: ${props => props.theme.black};
`;

export const StyledTimelinePlace = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${props => props.theme.white};
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;

    img {
        object-fit: cover;
    }
`;

export const StyledTimelineTop = styled.div`
    padding: 10px;
    border-radius: 5px;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
    position: relative;
    margin-bottom: 10px;

    p {
        margin: 0;
        font-size: 12px;
        color: ${props => props.theme.white};
        text-align: center;
    }

    .place {
        font-weight: 700;
        color: ${props => props.theme.white};
        text-align: center;

    }

    .time {
        color: ${props => props.theme.light};
        text-align: center;
    }

    &::before {
        content: '';
        position: absolute;
        width: 10px;
        display: block;
        height: 10px;
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.white};
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
    }

    @media (max-width: 991px) {
        position: absolute;
        right: calc(100% + 10px);
        top: 50%;
        transform: translateY(-50%);
        margin-bottom: 0;

        &::before {
            top: 50%;
            left: calc(100% - 5px);
            transform: translateY(-50%) rotate(45deg);
        }
    }
`;

export const StyledTimelineBottom = styled.div`
    padding: 10px;
    border-radius: 5px;
    background-color: ${props => props.theme.white};
    position: relative;
    margin-top: 10px;
    min-width: fit-content;

    p {
        margin: 0;
        font-size: 12px;
        text-align: center;
    }

    .place {
        font-weight: 700;
        text-align: center;
    }

    .time {
        color: ${props => props.theme.black};
        font-size: 10px;
        text-align: center;
    }

    &::before {
        content: '';
        position: absolute;
        width: 10px;
        display: block;
        height: 10px;
        background-color: ${props => props.theme.white};
        top: -5px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);

    }

    @media (max-width: 991px) {
        position: absolute;
        left: calc(100% + 10px);
        min-width: 120px;
        top: 50%;
        transform: translateY(-50%);
        margin-top: 0;
        
        &::before {
            top: 50%;
            left: initial;
            right: calc(100% - 5px);
            transform: translateY(-50%) rotate(45deg);
        }
    }
`;