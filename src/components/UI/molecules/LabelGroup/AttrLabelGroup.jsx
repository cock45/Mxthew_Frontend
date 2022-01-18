import styled from "styled-components";
import { StateLabelGroup } from "./StateLabelGroup";
import { HistoryButton } from "components/UI/atom/button/HistoryButton";

export const AttrLabelGroup = (props) => {

    return (
        <>
            <Body>
                <div className="d-none d-md-none d-lg-block">
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
                <div className="d-block d-md-block d-lg-none labelgroup">
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
                <HistoryButton className="d-none d-md-none d-lg-block">ROSTER</HistoryButton>
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
    
    @media (max-width: 992px) {
        position: relative;
        bottom: 0px;
        text-algin: center;
        .labelgroup {
            margin: auto;
            display: flex !important;
            background: url("./Images/Assets/claim-label.png") no-repeat;
            background-size: 100% 100%;
        }
        .labelgroup>div {
            margin: 12px;
        }
        .labelgroup label {
            font-size: 24px;
        }
    }
`;