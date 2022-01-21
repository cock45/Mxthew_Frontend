import { useState } from 'react'
import styled from 'styled-components'
import { StateLabelGroup } from './StateLabelGroup'
import { HistoryButton } from 'components/UI/atom/button/HistoryButton'
import { HistoryModal } from '../Modal/HistoryModal'
import { useDispatch, useSelector } from "react-redux";
import { rosterClickHandler } from "redux/reducer/rosterClickSlice";

export const NavClaimGroup = () => {
    const [lastClaim, setLastCliam] = useState("12/12/2021")
    const [nextClaim, setNextClaim] = useState("4d : 3m : 23m")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const isRoster = useSelector(state => state.rosterClick.value)
    const dispatch = useDispatch()

    return (
        <Body>
            <HistoryButton
                className="d-block d-md-block d-lg-none"
                onClick={() => dispatch(rosterClickHandler())}
            >
                {isRoster > 0 ? "BATTLE" : "ROSTER"}
            </HistoryButton>
            <HistoryButton onClick={() => setIsModalOpen(true)}>HISTORY</HistoryButton>
            <LabelArea>
                <StateLabelGroup
                    textColor="#ffa200"
                    title="Last Claim"
                    count={lastClaim}
                />
                <StateLabelGroup
                    title="Next Claim"
                    count={nextClaim}
                />
            </LabelArea>
            <HistoryModal isOpen={isModalOpen} toggleModal={setIsModalOpen} />
        </Body>
    )
}

const LabelArea = styled.div`
    background: url('./Images/Assets/claim-label.png') no-repeat;
    background-size: 100% 100%;
    padding: 18px 50px 12px;
    border-radius: 25px;
    display: inline-block;
    line-height: 1.2;
    -moz-transform: matrix( 0.79977058313964,0,0,0.80474761992452,0,0);
    -ms-transform: matrix( 0.79977058313964,0,0,0.80474761992452,0,0);

    div {
        line-height: 24px;
    }

    @media (max-width: 992px) {
        background: none;
        padding: 16px 15px;
    }
`

const Body = styled.div`
    display: flex;
    align-items: center;
    label {
        font-size: 24px;
        line-height: 24px;
    }

    @media (max-width: 992px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        background: url('./Images/Assets/claim-label.png') no-repeat;
        background-size: 100% 100%;
        margin: 0px 30px;
        padding: 0px 40px 0px 30px;
    }

    @media (max-width: 768px) {
        label {
            font-size: 18px;
        }
        padding: 0px 10px;
        margin: 0px 20px;
    }

    @media (max-width: 576px) {
        padding: 0px;
        margin: 0px;
    }
`
