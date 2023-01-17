import styled from "styled-components";

export const StyledCookiesWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: ${props => props.theme.light};
    color: ${props => props.theme.black};
    z-index: 10;
    padding: 20px;
    display: flex;
    align-items: start;

    ${props => props.visible ? `display: box;`: 'display: none;'}

`;