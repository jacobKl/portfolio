import * as React from 'react'
import { StyledAnchor } from '../GlobalStyle';

type Props = {
    text: string,
    variant: string,
    anchor: string,
    target: any
}

const Button = ({text, variant, anchor, target}: Props): JSX.Element => {
    return (
        <StyledAnchor variant={variant} target={target} href={anchor}>
            {text}
        </StyledAnchor>
    );
}

export default Button;