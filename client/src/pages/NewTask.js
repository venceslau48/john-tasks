import React, { useState } from "react"
import axios from "axios"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"
import TituloHeader from "../components/TituloHeader"
import { StyledControlos, StyledAdicionar } from "../components/Controlos"

const Form = styled.form`
    box-shadow: var(--shadow-light);
    border-radius: 0.8rem;
    width: 50rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: white;
    position: relative;
    padding: 3rem;
    margin: 7rem auto;

    @media (max-width: 31.25em) {
        width: auto;
        margin: 0 3rem;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3rem;
    width: 100%;

    &:nth-child(2) {
        padding-bottom: 4rem;
    }
`

const Label = styled.label`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-text-dark);
`

const Input = styled.input.attrs({ type: "text" })`
    font-size: 1.6rem;
    color: var(--color-text);
    width: 100%;
    height: 4.5rem;
    border-radius: 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    margin-top: 1rem;
    padding: 1rem;
    outline: none;
    transition: all 0.6s ease-in-out;

    &:hover {
        border-color: var(--color-primary-light);
    }
`

const Textarea = styled(Input).attrs({ as: "textarea" })`
    height: 100%;
    font-family: inherit;
`

const NewTask = () => {
    const [titulo, setTitulo] = useState("")
    const [texto, setTexto] = useState("")

    //ADICIONAR NOVA TASK
    const adicionar = e => {
        axios.post("/tasks", { id: uuidv4(), titulo, texto, estado: "tarefas" })
        window.location.href = "/tarefas"
    }

    return (
        <>
            <TituloHeader style={{ textAlign: "center" }}>Adicionar uma nova tarefa</TituloHeader>
            <Form>
                <Row>
                    <Label>Título</Label>
                    <Input value={titulo} onChange={e => setTitulo(e.target.value)} />
                </Row>
                <Row>
                    <Label>Texto</Label>
                    <Textarea rows="8" value={texto} onChange={e => setTexto(e.target.value)} />
                </Row>
                <StyledControlos adicionar>
                    <StyledAdicionar to="/tarefas" onClick={adicionar}>
                        Adicionar
                    </StyledAdicionar>
                </StyledControlos>
            </Form>
        </>
    )
}

export default NewTask
