import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    max-width: 1150px;
    margin: auto;
`;

const Wrapper = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
