import React from "react"
import styled from "styled-components"

const Container = styled.div`
    height: 25rem;
    width: 25rem;
    margin: 6rem auto;
`

const Imagem = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 6rem;
    object-fit: cover;
`

const TituloHeader = () => {
    return (
        <Container>
            <Imagem src={require("../images/empty.png")} />
        </Container>
    )
}

export default TituloHeader
