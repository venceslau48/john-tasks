import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import TituloHeader from "../components/TituloHeader"
import {
    StyledControlos,
    StyledCompletar,
    StyledEliminar,
    StyledAtualizar,
    StyledCancelar,
    StyledEditar
} from "../components/Controlos"

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

const LabelInput = styled.p`
    margin: 1rem 0 0 0;
    font-size: 1.6rem;
    color: var(--color-text);
`

const Input = styled.input.attrs({ type: "text" })`
    font-size: 1.6rem;
    color: var(--color-text);
    width: 100%;
    height: 4.5rem;
    border-radius: 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    margin-top: 1rem;
    font-size: 1.6rem;
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

const Detail = props => {
    const [state, setState] = useState({ task: {} })
    //ENTRA NA PÁGINA NO MODO VISUALIZAR
    const [editar, setEditar] = useState(false)

    //CARREGAR DETALHE DE UMA TASK
    useEffect(() => {
        if (props.match.params.estado === "tarefas") {
            axios.get("/tasks/" + props.match.params.id).then(res => {
                setState({ task: res.data })
            })
        }
        if (props.match.params.estado === "completas") {
            axios.get("/tasksCompletas/" + props.match.params.id).then(res => {
                setState({ task: res.data })
            })
        }
    }, [props.match.params.estado, props.match.params.id])

    //ATUALIZAR TASK
    const atualizar = () => {
        axios.put("/tasks/" + props.match.params.id, state.task)
        setEditar(false)
    }

    //COMPLETAR TASK
    const completar = e => {
        axios.post("/tasksCompletas", {
            id: state.task.id,
            titulo: state.task.titulo,
            texto: state.task.texto,
            estado: "completas"
        })
        axios.delete("/tasks/" + props.match.params.id)
    }

    //ELIMINAR TASK
    const eliminar = () => {
        axios.delete("/tasks/" + props.match.params.id)
    }

    //ELIMINAR TASK COMPLETA
    const eliminarCompleta = e => {
        axios.delete("/tasksCompletas/" + props.match.params.id)
    }

    return (
        <>
            {editar ? (
                <TituloHeader style={{ textAlign: "center" }}>Editar a tarefa</TituloHeader>
            ) : (
                <TituloHeader style={{ textAlign: "center" }}>Detalhe completo da tarefa</TituloHeader>
            )}
            <Form>
                <Row>
                    <Label>Título</Label>
                    {editar ? (
                        <Input
                            value={state.task.titulo}
                            onChange={e => setState({ task: { ...state.task, titulo: e.target.value } })}
                        />
                    ) : (
                        <LabelInput>{state.task.titulo}</LabelInput>
                    )}
                </Row>
                <Row>
                    <Label>Texto</Label>
                    {editar ? (
                        <Textarea
                            rows="8"
                            value={state.task.texto}
                            onChange={e => setState({ task: { ...state.task, texto: e.target.value } })}
                        />
                    ) : (
                        <LabelInput>{state.task.texto}</LabelInput>
                    )}
                </Row>
                <StyledControlos>
                    {state.task.estado === "completas" ? (
                        <StyledEliminar to="/completas" onClick={eliminarCompleta}>
                            Eliminar
                        </StyledEliminar>
                    ) : editar ? (
                        <>
                            <StyledAtualizar to="#" onClick={atualizar}>
                                Atualizar
                            </StyledAtualizar>
                            <StyledCancelar to="#" onClick={() => setEditar(false)}>
                                Cancelar
                            </StyledCancelar>
                        </>
                    ) : (
                        <>
                            <StyledCompletar to="/tarefas" onClick={completar}>
                                Completar
                            </StyledCompletar>
                            <StyledEditar to="#" onClick={() => setEditar(true)}>
                                Editar
                            </StyledEditar>
                            <StyledEliminar to="/tarefas" onClick={eliminar} w50>
                                Eliminar
                            </StyledEliminar>
                        </>
                    )}
                </StyledControlos>
            </Form>
        </>
    )
}

export default Detail
