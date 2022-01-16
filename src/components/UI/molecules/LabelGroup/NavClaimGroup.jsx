import { useState } from 'react'
import styled from 'styled-components'
import { StateLabelGroup } from './StateLabelGroup'

export const NavClaimGroup = () => {
    const [lastClaim, setLastCliam] = useState("12/12/2021");
    const [nextClaim, setNextClaim] = useState("4d : 3m : 23m");

    return (
        <Body>
            <StateLabelGroup
                color="#ffa200"
                title="Last Claim"
                count={lastClaim}
            />
            <StateLabelGroup
                title="Next Claim"
                count={nextClaim}
            />
        </Body>
    )
}

const Body = styled.div`
    background: url('./Images/Assets/claim-label.png') no-repeat;
    background-size: 100% 100%;
    padding: 18px 50px 12px;
    border-radius: 25px;
    display: inline-block;

    line-height: 1.2;
    -moz-transform: matrix( 0.79977058313964,0,0,0.80474761992452,0,0);
    -ms-transform: matrix( 0.79977058313964,0,0,0.80474761992452,0,0);

    @media (max-width: 992px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 15px;
    }
`