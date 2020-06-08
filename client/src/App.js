import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import styled from "styled-components"

//COMPONENTS
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"

//PAGES
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import NewTask from "./pages/NewTask"

const Container = styled.div`
    background: var(--color-bg);
`

const App = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to="/tarefas" />} />
                    <Route path="/:estado" exact component={Home} />
                    <Route path="/:estado/detalhe/:id" exact component={Detail} />
                    <Route path="/tarefas/adicionar" exact component={NewTask} />
                </Switch>
            </Wrapper>
        </Container>
    )
}

export default App
