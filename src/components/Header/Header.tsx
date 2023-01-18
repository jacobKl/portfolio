import * as React from 'react'
import { Navbar, NavbarWrapper, NavbarBrand, NavbarMenu, NavbarMenuItem, LangToggler, NavbarToggler } from './Header.styled'
import UI from './Header.ui'
import { Context } from '../../context/ContextProvider'
import { StyledRow, StyledContainer } from '../GlobalStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const { state, dispatch } = React.useContext<any>(Context)
  const [ useEnglish, setUseEnglish ] = React.useState(false)
  const [ isMenuOpened, setIsMenuOpened ] = React.useState(false)

  const toggleLang = (): void => {
    if (!useEnglish) {
      dispatch({type: 'CHANGE_LANGUAGE_MODE', payload: 'en'})
      setUseEnglish(true);
    } else {
      dispatch({type: 'CHANGE_LANGUAGE_MODE', payload: 'pl'})
      setUseEnglish(false);
    }
  }

  const toggleColorMode = (): void => {
    dispatch({type: 'CHANGE_COLOR_MODE'})
  }

  const closeMenu = () => setIsMenuOpened(false);

  const { languageMode }: { languageMode: string } = state;

  return (
    <Navbar>
        <StyledContainer>
          <NavbarWrapper>
              <NavbarBrand href="/">
                  J Klimek
              </NavbarBrand>

              <NavbarMenu active={isMenuOpened}>
                <NavbarMenuItem href="/#about-me" onClick={closeMenu}>
                  {UI[languageMode as keyof typeof UI].aboutMe}
                </NavbarMenuItem>
                <NavbarMenuItem href="/#experience" onClick={closeMenu}>
                  {UI[languageMode as keyof typeof UI].experience}
                </NavbarMenuItem>
                <NavbarMenuItem href="/#projects" onClick={closeMenu}>
                  {UI[languageMode as keyof typeof UI].projects}
                </NavbarMenuItem>
                <NavbarMenuItem href="mailto:kqklimek@gmail.com" onClick={closeMenu}>
                  {UI[languageMode as keyof typeof UI].contact}
                </NavbarMenuItem>
              </NavbarMenu>
              <StyledRow>
                <LangToggler active={useEnglish} onClick={toggleLang}>🇬🇧</LangToggler>
                <LangToggler active={state.colorMode == 'light' ? false : true} onClick={toggleColorMode}>🌙</LangToggler>
                <NavbarToggler active={isMenuOpened} onClick={() => setIsMenuOpened(!isMenuOpened)}>
                  <FontAwesomeIcon icon={faBars} />
                </NavbarToggler>
              </StyledRow>
          </NavbarWrapper>
        </StyledContainer>
    </Navbar>
  )
}
export default Header
