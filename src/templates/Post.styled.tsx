import styled from "styled-components";

export const StyledArticleImageWrapper = styled.figure`
    min-height: 400px;
    margin: 0;
    height: 100%;
    position: relative;
    flex: 1 0 50%;

    img {
        object-fit: cover;
    }

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
    flex: 1 0 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    
    & > * {
        color: ${props => props.theme.black}
    }
    
    h1 {
        font-size: 40px;
        margin: 5px 0 0;
    }

    h4 {
        margin: 5px 0 10px;
        font-weight: 100;
        color: ${props => props.theme.primary};
        
    }

    p {
        font-size: 20px;
        letter-spacing: .44px;
    }
`;

export const StyledArticleWrapper = styled.section `
    max-width: 900px;
    margin: 0 auto;
    padding: 0 10px;
    color: ${props => props.theme.black};
    

    img { 
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0 0 5px rgba(0,0,0,.3);
    }
`;

export const StyledCite = styled.div`
    background: ${props => props.theme.light};
    padding: .5rem .5rem .5rem 25px;
    border-left: 3px solid ${props => props.theme.primary};
    font-weight: 300;
    margin-top: 1rem;
    font-style: italic;

`;
