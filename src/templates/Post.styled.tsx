import styled from "styled-components";

export const StyledArticleImageWrapper = styled.figure`
    min-height: 300px;
    margin: 0;
    height: 100%;
    position: relative;
    flex: 1 0 50%;


    img {
        object-fit: cover;
        height: 100%;
    }
`;

export const StyledArticleIntro = styled.section `
    flex: 1 0 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    
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
    padding: 0 10px;
    color: ${props => props.theme.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    p {
        // background: ${props => props.theme.light};
        border-radius: .4rem;
        text-align: left;
        width: 100%;
        font-size: 1.3rem;
        padding: 10px;
    }

    img { 
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0 0 5px rgba(0,0,0,.3);
        max-height: 500px;
        margin: 0 auto;
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
