import { useState } from 'react'
import styled from 'styled-components'
import { StateLabelGroup } from './StateLabelGroup'

export const NavClaimGroup = () => {
    // const [rewardState, setRewardState] = useState(0);

    return (
        <Body>
            <StateLabelGroup
                color="#ffa200"
                title="Last Claim"
            />
            <StateLabelGroup
                color="#24FF00"
                title="Next Claim"
            />
        </Body>
    )
}

const Body = styled.div`
    background-color: rgba(0, 0, 0, .35);
    padding: 16px 50px;
    border-radius: 25px;
    display: inline-block;

    @media (max-width: 992px) {
        display: flex;
        align-items: center;
    }

    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
        padding: 16px 15px;
    }
`