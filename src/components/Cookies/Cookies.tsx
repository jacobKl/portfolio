import React, { useEffect, useState } from 'react'
import { StyledAnchor } from '../GlobalStyle'
import { StyledCookiesWrapper } from './Cookies.styled'

function Cookies(): JSX.Element {

  const [ shouldBeDisplayed, setShouldBeDisplayed ] = useState(false);

  useEffect(() => {
    const cookies = parseInt(localStorage.getItem('cookies') || '');
    if (!cookies) setShouldBeDisplayed(true);
  }, [])

  const saveCookies = () => {
    localStorage.setItem('cookies', '1');
    setShouldBeDisplayed(false);
  }

  return (
    <StyledCookiesWrapper visible={shouldBeDisplayed}>
        <div>
            Ta strona korzysta z plików cookie, używam ich w celu prowadzenia analityki oraz optymalizacji publikowanej treści. Możesz określić warunki przechowywania lub dostępu do cookie zmieniając ustawienia w swojej przeglądarce.
        </div>
        <StyledAnchor href="#" variant="primary" onClick={saveCookies}>Rozumiem</StyledAnchor> 
    </StyledCookiesWrapper>
  )
}

export default Cookies