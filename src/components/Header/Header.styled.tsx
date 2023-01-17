import styled from "styled-components"

export const Navbar = styled.nav `
    width: 100%;
    position: relative;
    z-index: 10;
`;

export const NavbarWrapper = styled.div `
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
`;

export const NavbarBrand = styled.a `
    font-size: 1.5rem; 
    font-family: 'Edu VIC WA NT Beginner';
    color: ${props => props.theme.black};
`;

export const NavbarMenu = styled.div<{ active: boolean }> `
    display: flex;
    transition: .4s;
    flex: 1;
    margin-left: 30px;
    padding-top: 5px;
    
    @media (max-width: 768px) {
        opacity: 0;
        pointer-events: none;
        position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        background: ${props => props.theme.light};
        flex-direction: column;
        z-index: 10;
        align-items: center;
        justify-content: center;
        margin: 0;

        ${props => props.active && 'opacity: 1; pointer-events: all; transition: .4s;'};
    }
`;

export const NavbarMenuItem = styled.a `
    margin: 0 20px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: .6s;
    color: ${props => props.theme.black};


    &:hover {
        color: ${props => props.theme.primary};
        transition: .6s;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
        padding: 10px 0;
        text-transform: uppercase;
        width: 100%;
        text-align: center;

        &:hover {
            background-color: ${props => props.theme.black};
            color: ${props => props.theme.white};            
        }
    }
`;

export const LangToggler = styled.div<{ active: boolean }>`
    cursor: pointer;
    filter: grayscale(1);
    transition: .4s;
    padding: 10px;

    &:hover {
        filter: grayscale(.5);
        transition: .4s;
    }

    ${props => props.active && 'filter: grayscale(0)'};
`;

export const NavbarToggler = styled.div<{ active: boolean }> `
    justify-content: center;
    align-items: center;
    padding: 10px 5px;
    cursor: pointer;
    font-size: 1.3rem;
    display: none;
    position: relative;
    z-index: 1000;

    svg {
        color: ${props => props.theme.black};
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;