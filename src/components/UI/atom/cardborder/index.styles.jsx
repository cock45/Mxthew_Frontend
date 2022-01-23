import styled from "styled-components";

export const BorderContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    & > * {
        position: absolute;
    }
`;
export const BorderImage = styled.img`
    top: 0 !important;
`;