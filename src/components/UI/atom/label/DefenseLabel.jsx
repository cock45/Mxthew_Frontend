import styled from "styled-components";
import { BaseLabel } from "./Label";

export const DefenceLabel = (props) => {
    return (
        <Body>Defence: {props.value}(%)</Body>
    )
}

const Body = styled(BaseLabel)`
    font-size: 14px;
`