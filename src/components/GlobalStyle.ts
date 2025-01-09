import styled, {
  createGlobalStyle
} from 'styled-components'

const GlobalStyle = createGlobalStyle `
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/Poppins/Poppins-Regular.ttf);
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(/fonts/Poppins/Poppins-Bold.ttf);
  }

  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/Nunito/Nunito-Regular.ttf);
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
 
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito';
    scroll-behavior: smooth;
    overflow-x: hidden;
    background-color: ${props => props.theme.white};
  }

  * {
    box-sizing: border-box;
    user-select: none;
  }

  .swiper {
    max-width: 100%;
    padding: 20px 0;
    overflow: visible;
  }

  .swiper-wrapper {
    overflow: visible;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    max-height: 90px;
    filter: grayscale(1);
  }

  a {
    text-decoration: none;
  }

  input, textarea {
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.light};
    border-radius: 4px;
    padding: 1rem;
    width: 100%;
    resize: no-resize;
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

export const StyledAnchor = styled.a `
  text-align: center;
  text-decoration: none;
  transition: .4s;
  font-family: Poppins;
  font-weight: 700;
  border-radius: 5px;
  letter-spacing: 0.44px;
  font-size: 16px;
  display: block;
  padding: 8px 40px;
  cursor: pointer;

  &:hover {
    transition: .4s;
  }

  & + & {
    margin-left: 10px;
  }

  ${props => props.variant === 'outlineDark' ? `color: ${props.theme.black}; border: 1px solid ${props.theme.black}; &:hover {background: ${props.theme.black}; color: ${props.theme.white};}` : ''}
  ${props => props.variant === 'primary' ? `color: white; border: 1px solid ${props.theme.primary}; background-color: ${props.theme.primary};`: ''}
  ${props => props.variant === 'text' ? `color: ${props.theme.primary};`: ''}
`;

export const StyledRow = styled.div `
  display: flex;
  flex-wrap: wrap;
  max-height: 100%;
  margin: 0 -15px;
`;


export const FullScreenSection = styled.section `
  min-height: 100vh;
  position: relative;
  margin: 60px 0;
`;

export const CenterWrapper = styled.div `
  margin: 0 auto;
  width: 90%;
  height: 100%;
`;

export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 80%;
  max-height: 100%;
`;

export const StyledColumn = styled.div`
  flex: 1;
  padding: 15px 0;

  @media (max-width: 986px) {
    flex: 1 0 100%;
  }
`;

export const StyledSectionTitle = styled.h2 `
  text-align: center;
  width: 100%;
  font-size: 48px;
`;


export const StyledSectionHeader = styled.h2 `
    font-size: 36px;
    color: ${props => props.theme.black};
    margin-top: 0;

    span {
        color: ${props => props.theme.primary};
        margin-right: 5px;
        font-size: 24px;
    }
`;


export default GlobalStyle;