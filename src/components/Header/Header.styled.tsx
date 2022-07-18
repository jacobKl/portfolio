import styled from "styled-components"

export const Navbar = styled.nav `
    width: 100%;
    position: fixed;
    top: 0;
`;

export const NavbarWrapper = styled.div `
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
`;

export const NavbarBrand = styled.a `
    font-size: 1.5rem; 
    font-family: 'Edu';
    color: ${props => props.theme.black};
`;

export const NavbarMenu = styled.div `
    display: flex;
`;

export const NavbarMenuItem = styled.a `
    margin: 0 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: .6s;
    color: ${props => props.theme.black};

    &:after {
        content: '';
        background: ${props => props.theme.black};
        height: 100%;
        width: 110%;
        top: 100%;
        transition: .4s;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    &:hover {
        color: ${props => props.theme.white};
        transition: .6s;

        &:after {
            top: 0%;
            z-index: -1;
            animate: bounce;
        }
    }
`;

export const LangToggler = styled.div `
    cursor: pointer;
    filter: grayscale(1);
    transition: .4s;

    &:hover {
        filter: grayscale(.5);
        transition: .4s;
    }

    & + & {
        margin-left: 10px;
    }

    ${props => props.active && 'filter: grayscale(0)'};
`;