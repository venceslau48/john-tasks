import React from "react"
import styled from "styled-components"

const StyledTitulo = styled.h2`
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--color-text-dark);
    padding: 0 3rem;
    margin: 4rem 0;
`

const TituloHeader = ({ style, children }) => {
    return <StyledTitulo style={style}>{children}</StyledTitulo>
}

export default TituloHeader
