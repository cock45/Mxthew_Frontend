import styled from "styled-components";
import { BaseLabel } from "./Label";

export const BigLabel = styled(BaseLabel)`
    font-size: 30px;

    @media (max-width: 1200px) {
        font-size: 24px;
    }

    @media (max-width: 576px) {
        font-size: 14px;
    }
`