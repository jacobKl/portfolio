import styled from "styled-components";

export const FooterWrapper = styled.footer `
    background-color: ${props => props.theme.light};
    padding: 30px 0;

    p {
        color: ${props => props.theme.black};
    }

    input, textarea {
        font-family: "Nunito";
        color: ${props => props.theme.black};
    }

    input[type="submit"] {
        color: ${props => props.theme.white};
        border-radius: 6px;
    }
`;

export const StyledButton = styled.input `
    text-align: center;
    text-decoration: none;
    transition: .4s;
    font-family: Poppins;
    font-weight: 700;
    border-radius: 2px;
    letter-spacing: 0.44px;
    font-size: 16px;
    display: block;
    padding: 8px 40px;
    background-color: ${props => props.theme.primary};
    color: white;
    cursor: pointer;
`;