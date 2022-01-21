import styled from "styled-components"
import { RosterCard } from "./RosterCard"
import { BlankCard } from "./BlankCard"
import { StateLabelGroup } from "../LabelGroup/StateLabelGroup"
import { MyScrollbar } from "../Scrollbar"

export const BattleDeck = (props) => {
    // const deckMonsters = [1, 2]

    return (
        <Deck className="battle-deck">
            <div className="container">
                <div className="titlebar">
                    <h3>Battle Deck</h3>
                    <StateLabelGroup
                        title="ROSTER"
                        titleColor="#00fffc"
                        count="1/10"
                    />
                </div>
                <MyScrollbar>
                    <div className="row">
                        <div className="col-lg-6 col-md-4">
                            <RosterCard button="Remove" />
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <RosterCard button="Remove" />
                        </div>

                        <div className="col-lg-6 col-md-4">
                            <BlankCard />
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <BlankCard />
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <BlankCard />
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <BlankCard />
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <RosterCard button="Remove" />
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <RosterCard button="Remove" />
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <RosterCard button="Remove" />
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <RosterCard button="Remove" />
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <RosterCard button="Remove" />
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <RosterCard button="Remove" />
                        </div>
                    </div>
                </MyScrollbar>
            </div>
        </Deck>
    )
}

const Deck = styled.div`
    border-style: solid;
    border-width: 3px;
    border-color: rgb(255, 255, 255);
    border-radius: 28px;
    background-image: -moz-linear-gradient( 90deg, rgb(0,0,0) 0%, rgb(1,39,97,.5) 100%);
    background-image: -webkit-linear-gradient( 90deg, rgb(0,0,0) 0%, rgb(1,39,97,.5) 100%);
    background-image: -ms-linear-gradient( 90deg, rgb(0,0,0) 0%, rgb(1,39,97,.5) 100%);

    .titlebar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 30px 0px;
    }
    .titlebar h3 {
        color: #fff;
    }
    .titlebar label {
        font-size: 24px;
    }

    .row {
        padding-right: 20px;
        padding-left: 5px;
    }

    .col-lg-6 {
        margin-bottom: 40px;
        padding-right: calc(var(--bs-gutter-x) * .5);
        padding-left: calc(var(--bs-gutter-x) * .5);
    }

    .content {
        height: 60vh;
    }

    .content {
        height: calc(32vw + 40px) !important;
    }

    .force-overflow {
        height: calc(320vw + 900px) !important;
    }
`