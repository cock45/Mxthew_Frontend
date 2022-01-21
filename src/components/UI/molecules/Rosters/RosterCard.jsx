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
        <Body>
            <div>
                <div>
                    <img src="./Images/Assets/shell.png" className="sm-img" style={{ marginRight: '5px' }} />
                    <StarBadge
                        rate={monster.rate}
                        limit="4"
                        activeColor="#fff"
                        blankColor="#042e7e"
                    />
                    <img src="./Images/Assets/monster-id.png" className="sm-img" style={{ float: 'right' }} />
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
        </Body>
    )
}

const Body = styled.div`
    width: 10vw;
    height: 16vw;
    border: 2px solid #fff;
    border-radius: 8px;
    padding: 5px;
    position: relative;

    .sm-img {
        max-height: 24px;
    }

    i {
        margin-right: 2px;
    }

    .name-label {
        color: #fff;
        display: flex;
        justify-content: space-between;
        margin: 5px;
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
        padding: 20px 10px 40px;
    }

    .footer-label .title {
        font-size: 16px;
    }

    .footer-label .state {
        font-size: 24px;
    }

    .btn-remove {
        position: absolute;
        left: 50%;
        bottom: 0px;
        transform: translate(-50%, 50%);
        border: none;
        font-size: 18px;
        padding: 5px 36px 8px;
    }


    // @media (max-width: 1600px) {
    //     width: 12vw;
    // }
`
// remove: #cf0005
// deploy: #01670b
// power: #750f29
// accurracy: #00c4ee
// total character: #00fcff