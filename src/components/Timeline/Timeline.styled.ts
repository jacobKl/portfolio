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
    flex-direction: column;
    padding: 10px;
`;

export const StyledTimelineRow = styled.div `
    display: flex;
    align-items: center;    
`;

export const StyledTimelineCol = styled.div<{ variant: string }> `
    flex: 2 0 40%;
    text-align: ${ props => props.variant };
    
    &:not(:empty) {
        background: ${props => props.theme.light};
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 25px rgba(0,0,0,0.2);
    }

    span {
        color: #aaa;
        font-size: 12px;
    }

    h6 {
        margin: 0;
    }
`;

export const StyledTimelineIcon = styled.div `
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

export const StyledTimelineStep = styled.div<{height: string}> `
    height: ${props => props.height}px;
    width: 2px;
    background: ${props => props.theme.black};
    margin: 3px auto;
`;