import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const Nav = styled.nav`
    min-height: 8vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: white;
    box-shadow: var(--shadow-light);
`;

const Container = styled.div`
    max-width: 1150px;
    width: 1150px;
    margin: 0 auto;
    padding: 0 3rem;
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const ListItem = styled.li`
    &:not(:first-child) {
        margin-left: 4rem;
    }

    &:last-child {
        margin-left: auto;
    }
`;

const StyledLink = styled(NavLink).attrs({ activeClassName: "active" })`
    color: var(--color-text);
    font-size: 1.6rem;
    text-decoration: none;

    &.active {
        color: var(--color-primary);
    }
`;

const CTA = styled(Link)`
    border-radius: 0.8rem;
    color: white;
    font-size: 1.6rem;
    padding: 0.7rem 1rem;
    text-decoration: none;
    background: var(--color-primary);
    transition: all 0.4s ease-in-out;

    &:hover {
        color: white;
        background: var(--color-primary-light);
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <Container>
                <NavList>
                    <ListItem>
                        <StyledLink to="/tarefas">Tarefas</StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink to="/completas">Completas</StyledLink>
                    </ListItem>
                    <ListItem>
                        <CTA to="/tarefas/adicionar">Nova tarefa</CTA>
                    </ListItem>
                </NavList>
            </Container>
        </Nav>
    );
};

export default Navbar;
