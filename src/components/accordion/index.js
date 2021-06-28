import React from 'react';

export default function Accordion ({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}