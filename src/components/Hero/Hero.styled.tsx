import styled from 'styled-components'

export const HeroWrapper = styled.section `
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    background-color: ${props => props.theme.white};
`;

export const HeroContent = styled.article `
    padding-left: 5vw;
    flex: 1 0 50%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    color: ${props => props.theme.black};
`;

export const HeroImageWrapper = styled.article `
    flex: 1 0 50%;
    max-width: 50%;
    background: ${props => props.theme.white};
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
`;

export const HeroImage = styled.img `
 height: auto;
 width: 20vw;
`;

export const HeroTitle = styled.h1 `
    font-size: 4rem;
    margin: 0;
    color: ${props => props.theme.black};
`;
    
export const HeroSubtitle = styled.h2 `
    margin-bottom: 0;
    font-weight: 100;
    font-size: 2rem;
    color: ${props => props.theme.black};
`;