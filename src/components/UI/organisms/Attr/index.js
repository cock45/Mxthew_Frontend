import { useState } from "react";
import styled from "styled-components";
import { StateLabelGroup } from "../../molecules/LabelGroup/StateLabelGroup"

export const Attr = () => {
    const date = "12/12/2021"
    const [stack, setStack] = useState(0)

    return (
        <Body>
            <StateLabelGroup
                color="#e02222"
                title="Last Attack"
                count={date}
            />
            <StateLabelGroup
                color="#24ff00"
                title="Stack"
                count={stack}
            />
        </Body>
    )
}

const Body = styled.div`

`;