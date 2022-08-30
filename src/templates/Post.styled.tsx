import styled from "styled-components";

export const StyledArticleImageWrapper = styled.figure`
    min-height: 400px;
    margin: 0;
    height: 100%;
    position: relative;

    &:before {
        content: '';
        background: rgba(0,0,0,.1);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
    }
`;

export const StyledArticleIntro = styled.section `
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        font-size: 40px;
        margin: 5px 0 0;
    }

    h4 {
        margin: 5px 0 10px;
        color: ${props => props.theme.primary};
    }

    p {
        font-size: 20px;
        letter-spacing: .44px;
    }

    h4 {
        font-weight: 100;
    }
`;

export const StyledArticleWrapper = styled.section `
    max-width: 900px;
    margin: 0 auto;
`;