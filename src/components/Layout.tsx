import * as React from 'react'
import Header from './Header/Header'
import GlobalStyle from './GlobalStyle'
import ContextProvider from '../context/ContextProvider';
import Footer from './Footer/Footer';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Helmet } from 'react-helmet';
import styled from 'styled-components'
import Cookies from './Cookies/Cookies';


type Props = {
    title: string,
    description: string,
    children: JSX.Element
}

const Layout = ({title, description, children}: Props): JSX.Element => {

    const { title: defaultTitle, description: defaultDescription } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
      }

    return (
        <>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <link rel="icon" type="image/x-icon" href={'../assets/favicon-32x32.png'}></link>
            </Helmet>
            <ContextProvider>
                <GlobalStyle/>
                <Header/>
                <Overflow>
                {children}
                </Overflow>
                {/* <Footer></Footer> */}
                <Cookies/>
            </ContextProvider>
        </>
    );
}

const Overflow = styled.main`
    max-width: 100vw;
`;

export default Layout;