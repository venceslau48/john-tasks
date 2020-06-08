import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledControlos = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    padding: 0;
    background: ${props => (props.adicionar ? "var(--color-primary)" : "rgba(0, 0, 0, 0.06)")};
    border-radius: 0 0 0.8rem 0.8rem;
    bottom: 0;
    left: 0%;
    width: 100%;
`

export const StyledAdicionar = styled(Link)`
    color: white;
    padding: 1rem;
    text-align: center;
    transition: all 0.4s ease-in-out;
    outline: none;
    font-weight: 600;
    font-size: 1.4rem;
    transition: all 0.4s ease-in-out;
    width: 100%;
    border-radius: 0 0 0.8rem 0.8rem;

    &:hover {
        color: white;
        background: var(--color-primary-light);
    }
`

export const StyledCompletar = styled(Link)`
    color: var(--color-primary);
    padding: 1rem;
    text-align: center;
    transition: all 0.4s ease-in-out;
    outline: none;
    font-weight: 600;
    font-size: 1.4rem;

    &:hover {
        color: var(--color-primary-light);
    }
`

export const StyledEliminar = styled(Link)`
    color: var(--color-text-dark);
    padding: 1rem;
    text-align: center;
    transition: all 0.4s ease-in-out;
    outline: none;
    font-weight: 600;
    font-size: 1.4rem;

    &:hover {
        color: var(--color-primary-light);
    }
`

export const StyledAtualizar = styled(Link)`
    color: var(--color-primary);
    padding: 1rem;
    text-align: center;
    transition: all 0.4s ease-in-out;
    outline: none;
    font-weight: 600;
    font-size: 1.4rem;

    &:hover {
        color: var(--color-primary-light);
    }
`

export const StyledCancelar = styled(Link)`
    color: var(--color-text-dark);
    padding: 1rem;
    text-align: center;
    transition: all 0.4s ease-in-out;
    outline: none;
    font-weight: 600;
    font-size: 1.4rem;

    &:hover {
        color: var(--color-primary-light);
    }
`

export const StyledEditar = styled(Link)`
    color: var(--color-text-dark);
    padding: 1rem;
    text-align: center;
    transition: all 0.4s ease-in-out;
    outline: none;
    font-weight: 600;
    font-size: 1.4rem;

    &:hover {
        color: var(--color-primary-light);
    }
`
