import styled from "styled-components";

export const StyledArticleTileWrapper = styled.div`
    flex: 1 0 33.3%;
    max-width: 33.3%;
    padding: 0 15px;
    margin-bottom: 25px;

    .gatsby-image-wrapper {
        max-height: 220px;
    }

    @media (max-width: 1200px) {
        flex: 1 0 50%;
        max-width: 50%;
    }

    @media (max-width: 768px) {
        flex: 1 0 100%;
        max-width: 100%;
    }

`;

export const StyledArticleTile = styled.article`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    filter: drop-shadow(10px -7px 20px rgba(0,0,0,0.4));
    background-color: ${props => props.theme.tile};
    border-radius: 7px;
    height: 100%;

    h2 {
        margin-top: 0;
        font-size: 1.35rem;
        margin-bottom: 10px;

        a {
            color: ${props => props.theme.primary};
        }
    }

    p {
        margin-top: 0;
        color: ${props => props.theme.black};
        font-weight: 300;
    }

    img {
        filter: brightness(.9);
        height: 200px;
    }
`;

export const StyledArticleContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
    flex-grow: 1;

    a {
        align-self: flex-end;
        jusitfy-content: flex-end;
        flex-grow: 0;
    }
`;
