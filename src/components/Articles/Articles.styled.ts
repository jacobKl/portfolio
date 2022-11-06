import styled from "styled-components";

export const StyledArticles = styled.section`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: ${props => props.theme.dark ? "" : "url('/static/underlay_top.png')"};
    padding: 140px 0;
    background-position: 0 0;
    background-repeat: no-repeat;
`;

export const StyledArticlesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 80%;
    z-index: 11;
    position: relative;
    margin: 0 -15px;
`;
