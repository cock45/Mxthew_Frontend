import styled from "styled-components"
import { StateLabelGroup } from "../LabelGroup/StateLabelGroup"
import { HistoryButton } from "components/UI/atom/button/HistoryButton"
import { StarBadge } from "components/UI/atom/badge/StarBadge"

export const RosterCard = (props) => {
    const monster = {
        name: 'Freethes',
        id: 123456,
        rate: 1,
        power: 12,
        acurracy: 12,
        image: './Images/Monsters/5.png',
    }

    return (
        <Body className="roster-card">
            <div>
                <div className="toparea">
                    <div>
                        <img src="./Images/Assets/shell.png" className="sm-img" style={{ marginRight: '5px' }} />
                    </div>
                    <StarBadge
                        rate={monster.rate}
                        limit="4"
                        activeColor="#fff"
                        blankColor="#042e7e"
                    />
                    <div className="text-right">
                        <img src="./Images/Assets/monster-id.png" className="sm-img" />
                    </div>
                </div>
                <div className="name-label">
                    <h2>{monster.name}</h2>
                    <h2>#{monster.id}</h2>
                </div>
            </div>
            <div className="img-area">
                <img src="./Images/Monsters/5.png" />
            </div>
            <div className="footer-label">
                <StateLabelGroup title="Power" count={monster.power} titleColor="#750f29" />
                <StateLabelGroup title="Acurracy" count={monster.acurracy} titleColor="#00c4ee" />
            </div>
            <HistoryButton
                background={props.button === "Deploy" ? "./Images/Buttons/Group-93-copy.png" : "./Images/Buttons/fight-button.47c09368.png"} className="btn-remove">
                {props.button}
            </HistoryButton>
            {props.button === "Remove" && (
                <div className="time-label">
                    <StateLabelGroup title="00" count="00" />
                </div>
            )}
        </Body>
    )
}

const Body = styled.div`
    border: 2px solid #fff;
    border-radius: 8px;
    padding: 5px;
    position: relative;
    margin-left: auto;
    margin-right: auto;

    .sm-img {
        max-height: 24px;
    }

    i {
        margin-right: 2px;
    }

    .toparea {
        display: flex;
        align-items: center;
    }

    .name-label {
        color: #fff;
        display: flex;
        justify-content: space-between;
        margin-top: 3px;
    }

    .name-label h2 {
        font-size: 14px;
    }

    .img-area {
        padding: 0px 10px;
    }

    .img-area img {
        max-width: 100%
    }

    .footer-label {
        display: flex;
        justify-content: space-between;
        padding: 10px 0px;
    }

    .footer-label .title {
        font-size: 14px;
    }

    .footer-label .state {
        font-size: 18px;
    }

    .btn-remove {
        position: absolute;
        left: 50%;
        bottom: 0px;
        transform: translate(-50%, 50%);
        border: none;
        font-size: 20px;
        padding: 0px 0px 3px 0px !important;
        width: 100px;
        height: 36px;
    }

    .time-label {
        position: absolute;
        left: 50%;
        bottom: -46px;
        transform: translate(-50%, 0px);
        background-color: rgb(43, 34, 120);
        box-shadow: inset 0px 10px 21px 0px rgba(0, 0, 0, 0.54);
        padding: 0px 5px 0px;
        border-radius: 12px;
    }
    .time-label div{
        line-height: 24px !important;
    }
    .time-label label {
        font-size: 18px;
    }
    
    width: 160px;
    height: 256px;
        
    @media (max-width: 1399px) {
        width: 140px;
        height: 224px;
        .btn-remove {
            width: 86px;
            height: 30px;
            font-size: 16px !important;
        }
    }
    @media (max-width: 1199px) {
        width: 120px;
        height: 192px;

        .sm-img {
            max-height: 20px;
        }
        i {
            font-size: 14px;
        }
        .footer-label {
            padding: 5px 0px;
        }
        .footer-label .title {
            font-size: 12px;
        }
        .footer-label .state {
            font-size: 16px;
        }
        .btn-remove {
            width: 75px;
            height: 26px;
            font-size: 14px !important;
        }
        .time-label {
            border-radius: 10px;
            bottom: -42px;
        }
        .time-label label {
            font-size: 16px;
        }
        
    }
    @media (max-width: 991px) {
        width: 200px;
        height: auto;
        padding-bottom: 40px;
        padding: 5px 12px 45px;

        .sm-img {
            max-height: 24px;
        }
        i {
            font-size: 18px;
            margin-left: 3px;
        }
        .img-area {
            padding: 16px 10px;
        }
        .name-label h2, .footer-label .state
        {
             font-size: 24px;
        }
        .footer-label .title {
            font-size: 18px;
        }
        .btn-remove {
            width: 132px;
            height: 36px;
            font-size: 20px !important;
        }
        .time-label {
            bottom: 20px;
            padding: 0px 10px;
        }
    }
    
    @media (max-width: 767px) {
        width: 150px;
        padding: 5px 10px 45px;
        .sm-img {
            max-height: 22px;
        }
        i {
            font-size: 14px;
            margin-left: 2px;
            margin-right: 0px;
        }
        .name-label h2, .footer-label .state
        {
            font-size: 18px;
        }
        .footer-label .title {
            font-size: 14px;
        }
        .btn-remove {
            width: 96px;
            height: 30px;
            font-size: 18px !important;
        } 
    }

    @media (max-width: 575px) {
        width: 38vw;
        padding-top: 10px;
        .sm-img {
            max-height: 28px;
        }
        i {
            font-size: 20px;
            margin-left: 5px;
        }
        .name-label h2, .footer-label .state
        {
            font-size: 24px;
        }
        .footer-label .title {
            font-size: 18px;
        }
        .btn-remove {
            width: 60%;
            height: 6vw;
            font-size: 18px !important;
        } 
    }

    @media (max-width: 479px) {
        padding-top: 10px;
        .sm-img {
            max-height: 24px;
        }
        i {
            font-size: 16px;
            margin-left: 3px;
        }
        .name-label h2, .footer-label .state
        {
            font-size: 20px;
        }
        .footer-label .title {
            font-size: 14px;
        }
    }
`