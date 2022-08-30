import * as React from 'react'
import Header from './Header/Header'
import GlobalStyle from './GlobalStyle'
import ContextProvider from '../context/ContextProvider';
import Footer from './Footer/Footer';

type Props = {
    children: JSX.Element
}

const Layout = ({children}: Props): JSX.Element => {
    return (
        <>
            <ContextProvider>
                <GlobalStyle/>
                <Header/>
                {children}
                <Footer></Footer>
            </ContextProvider>
        </>
    );
}

export default Layout;