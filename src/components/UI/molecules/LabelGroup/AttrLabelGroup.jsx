import styled from "styled-components";
import { StateLabelGroup } from "./StateLabelGroup";
import { HistoryButton } from "components/UI/atom/button/HistoryButton";
import { useDispatch, useSelector } from "react-redux";
import { rosterClickHandler } from "redux/reducer/rosterClickSlice";

export const AttrLabelGroup = (props) => {
    const isRoster = useSelector(state => state.rosterClick.value)
    const dispatch = useDispatch()

    return (
        <>
            <Body>
                <div className="d-none d-md-none d-lg-block labelgroup">
                    <StateLabelGroup
                        textColor="#e02222"
                        title="Last Attack"
                        count={props.lastClaim}
                    />
                    <StateLabelGroup
                        title="Stack"
                        count={props.nextCliam}
                    />
                </div>
                <div className="d-block d-md-block d-lg-none labelgroup-mobile">
                    <StateLabelGroup
                        titleColor="#f00"
                        textColor="#fff"
                        title="Last Attack"
                        count={props.lastClaim}
                    />
                    <StateLabelGroup
                        titleColor="#0f0"
                        textColor="#fff"
                        title="Stack"
                        count={props.nextCliam}
                    />
                </div>
                <HistoryButton
                    className="d-none d-md-none d-lg-block"
                    onClick={() => dispatch(rosterClickHandler())}
                >
                    {isRoster > 0 ? "BATTLE" : "ROSTER"}
                </HistoryButton>
            </Body>
        </>
    )
}

const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    bottom: 50px;
    
    .labelgroup {
        background: url("./Images/Assets/claim-label.png") no-repeat;
        background-size: 100% 100%;
        padding: 20px;
        width: 350px;
    }

    @media (max-width: 991px) {
        position: relative;
        bottom: 0px;
        text-algin: center;
        .labelgroup-mobile {
            margin: auto;
            display: flex !important;
            div {
                margin: 12px;
            }
            label {
                font-size: 24px;
            }
        }
    }
`;