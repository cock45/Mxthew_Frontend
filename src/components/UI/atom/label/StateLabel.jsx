import styled from "styled-components";
import { BigLabel } from "./BigLabel";

export const StateLabel = (props) => {
    return (
        <WhiteLable style={{ color: props.color }} className="state">{props.text}</WhiteLable>
    )
}

const WhiteLable = styled(BigLabel)`
    color: #FFF;
    font-weight: bold;
`