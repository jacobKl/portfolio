import styled, {
  createGlobalStyle
} from 'styled-components'

const GlobalStyle = createGlobalStyle `
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono';
  }

  * {
    box-sizing: border-box;
    user-select: none;
  }

  @font-face {
    font-family: 'Roboto Mono';
    src: url('/static/Roboto_Mono/RobotoMono-VariableFont_wght.ttf');
  }

  @font-face {
    font-family: 'Edu';
    src: url('/static/Edu_VIC_WA_NT_Beginner/EduVICWANTBeginner-VariableFont_wght.ttf');
  }
`;

export const StyledAnchor = styled.a `
  padding: 10px;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  transition: .4s;

  &:hover {
    transition: .4s;
  }

  & + & {
    margin-left: 10px;
  }

  ${props => props.variant === 'outlineDark' ? `color: ${props.theme.black}; border: 1px solid ${props.theme.black}; &:hover {background: ${props.theme.black}; color: ${props.theme.white};}` : ''}
  ${props => props.variant === 'blue' ? 'color: white; border: 1px solid #1C5D99; background-color: #1C5D99; &:hover {background: #73afe5; border-color: #73afe5;}': ''}
`;

export const StyledRow = styled.div `
  display: flex;
`;

export default GlobalStyle;