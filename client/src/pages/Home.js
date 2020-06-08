import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import Card from "../components/Card"
import Wrapper from "../components/Wrapper"
import TituloHeader from "../components/TituloHeader"
import Empty from "../components/Empty"

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 3rem;
    padding: 3rem;
`

const Home = props => {
    const [state, setState] = useState({ tasks: [] })

    //CARREGAR TODAS AS TASKS
    useEffect(() => {
        if (props.match.params.estado === "tarefas") {
            axios.get("/tasks").then(res => {
                setState({ tasks: res.data })
            })
        }
        if (props.match.params.estado === "completas") {
            axios.get("/tasksCompletas").then(res => {
                setState({ tasks: res.data })
            })
        }
    }, [props.match.params.estado])

    return (
        <Wrapper>
            {props.match.params.estado === "tarefas" && (
                <TituloHeader>Listagem de todas as tarefas por completar</TituloHeader>
            )}
            {props.match.params.estado === "completas" && (
                <TituloHeader>Listagem de todas as tarefas completas</TituloHeader>
            )}
            {state.tasks.length > 0 ? (
                <Grid>
                    {state.tasks.map(task => (
                        <Card task={task} key={task.id} />
                    ))}
                </Grid>
            ) : (
                <Empty />
            )}
            {console.log(state.tasks.length)}
        </Wrapper>
    )
}

export default Home
