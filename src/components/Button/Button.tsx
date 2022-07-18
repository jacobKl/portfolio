import * as React from 'react'
import { StyledAnchor } from '../GlobalStyle';

type Props = {
    text: string,
    variant: string,
    anchor: string
}

const Button = ({text, variant, anchor}: Props): JSX.Element => {
    return (
        <StyledAnchor variant={variant} href={anchor}>
            {text}
        </StyledAnchor>
    );
}

export default Button;