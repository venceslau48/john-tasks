import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledControlos, StyledCompletar, StyledEliminar } from "./Controlos";

const CardContainer = styled.div`
    box-shadow: var(--shadow-light);
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: white;
    transition: all 0.6s ease-in-out;
    position: relative;
    height: 25rem;

    &:hover {
        transform: translateY(-0.8rem);
        box-shadow: var(--shadow-dark);
    }
`;

const ContainerLink = styled(Link)`
    padding: 2rem;
`;

const Titulo = styled.h2`
    color: var(--color-text-dark);
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
`;

const Texto = styled.p`
    margin: 0;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-text);
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
`;

const Card = ({ task }) => {
    //COMPLETAR TASK
    const completar = e => {
        axios.post("/tasksCompletas", { id: task.id, titulo: task.titulo, texto: task.texto, estado: "completas" });
        axios.delete("/tasks/" + task.id);
        window.location.reload();
    };

    //ELIMINAR TASK
    const eliminar = e => {
        axios.delete("/tasks/" + task.id);
        window.location.reload();
    };

    //ELIMINAR TASK COMPLETA
    const eliminarCompleta = e => {
        axios.delete("/tasksCompletas/" + task.id);
        window.location.reload();
    };

    return (
        <CardContainer>
            <ContainerLink to={task.estado + "/detalhe/" + task.id}>
                <Titulo>{task.titulo}</Titulo>
                <Texto>{task.texto}</Texto>
            </ContainerLink>
            <StyledControlos>
                {task.estado === "completas" ? (
                    <StyledEliminar onClick={eliminarCompleta}>Eliminar</StyledEliminar>
                ) : (
                    <StyledControlos>
                        <StyledCompletar onClick={completar}>Completar</StyledCompletar>
                        <StyledEliminar onClick={eliminar}>Eliminar</StyledEliminar>
                    </StyledControlos>
                )}
            </StyledControlos>
        </CardContainer>
    );
};

export default Card;
