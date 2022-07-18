import * as React from 'react'
import Header from './Header/Header'
import GlobalStyle from './GlobalStyle'
import ContextProvider from '../context/ContextProvider';

type Props = {
    children: JSX.Element
}

const Layout = ({children}: Props): JSX.Element => {
    return (
        <>
            <GlobalStyle/>
            <ContextProvider>
                <Header/>
                {children}
            </ContextProvider>
        </>
    );
}

export default Layout;