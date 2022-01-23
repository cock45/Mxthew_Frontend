import styled from "styled-components";

export const CardContainer = styled.div`
    position: relative;
`;
export const CardComponentsConatiner = styled.div`
    position: relative;
    & > * {
        left: 0;
    }
`;
export const CardEnemyStats = styled.div`
    position: relative;
    color: white;
    width: 100%;
    text-align: center;
    left: 0;
    border: solid thin transparent;
`;