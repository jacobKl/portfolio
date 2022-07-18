import * as React from 'react'
import { Navbar, NavbarWrapper, NavbarBrand, NavbarMenu, NavbarMenuItem, LangToggler } from './Header.styled'
import UI from './Header.ui'
import { Context } from '../../context/ContextProvider'
import { StyledRow } from '../GlobalStyle'

const Header = () => {
  const { state, dispatch } = React.useContext(Context) 
  const [ useEnglish, setUseEnglish ] = React.useState(false)

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

  return (
    <Navbar>
        <NavbarWrapper>
            <NavbarBrand>
                J Klimek
            </NavbarBrand>

            <NavbarMenu>
              <NavbarMenuItem>
                {UI[state.languageMode].aboutMe}
              </NavbarMenuItem>
              <NavbarMenuItem>
                {UI[state.languageMode].experience}
              </NavbarMenuItem>
              <NavbarMenuItem>
                {UI[state.languageMode].projects}
              </NavbarMenuItem>
              <NavbarMenuItem>
                {UI[state.languageMode].publications}
              </NavbarMenuItem>
              <NavbarMenuItem>
                {UI[state.languageMode].contact}
              </NavbarMenuItem>
            </NavbarMenu>
            <StyledRow>
              <LangToggler active={useEnglish} onClick={toggleLang}>🇬🇧</LangToggler>
              <LangToggler active={state.colorMode == 'light' ? false : true} onClick={toggleColorMode}>🌙</LangToggler>
            </StyledRow>
        </NavbarWrapper>
    </Navbar>
  )
}
export default Header
