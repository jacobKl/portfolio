import styled from "styled-components";

export const StyledArticleTileWrapper = styled.div`
    flex: 1 0 33%;
    max-width: 33%;
    padding: 0 15px;
`;

export const StyledArticleTile = styled.article`
    display: flex;
    background: #FCFCFC;
    overflow: hidden;
    flex-direction: column;

    h2 {
        margin-top: 0;
        font-size: 1.25rem;
        margin-bottom: 3px;

        a {
            color: ${props => props.theme.primary};
        }
    }

    p {
        margin-top: 0;
    }

    img {
        overflow: hidden;
    }
`;

export const StyledArticleContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;