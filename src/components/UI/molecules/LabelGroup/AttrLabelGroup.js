import { useState } from "react";
import styled from "styled-components";
import { StateLabelGroup } from "./StateLabelGroup";

export const AttrLabelGroup = (props) => {


    return (
        <Body>
            <StateLabelGroup
                textColor="#e02222"
                title="Last Attack"
                count={props.lastClaim}
            />
            <StateLabelGroup
                title="Stack"
                count={props.nextCliam}
            />
        </Body>
    )
}

const Body = styled.div`
    margin-top: 50px;
`;