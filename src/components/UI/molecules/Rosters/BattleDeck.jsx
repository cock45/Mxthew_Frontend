import styled from "styled-components"
import { RosterCard } from "./RosterCard"
import { BlankCard } from "./BlankCard"
import { StateLabelGroup } from "../LabelGroup/StateLabelGroup"
import { MyScrollbar } from "../Scrollbar"

export const BattleDeck = (props) => {
    // const deckMonsters = [1, 2]

    return (
        <Deck className="battle-deck">
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
                    <div className="col-6 col-sm-4 col-lg-6">
                        <RosterCard button="Remove" />
                    </div>
                    <div className="col-6 col-sm-4 col-lg-6">
                        <RosterCard button="Remove" />
                    </div>

                    <div className="col-6 col-sm-4 col-lg-6">
                        <BlankCard />
                    </div>
                    <div className="col-6 col-sm-4 col-lg-6">
                        <BlankCard />
                    </div>
                </div>
            </MyScrollbar>
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
    padding-right: 10px;

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
        padding-right: 10px;
        margin: 0px;
    }

    .col-lg-6 {
        margin-bottom: 55px;
    }

    .content {
        height: 570px !important;
        padding: 0px;
    }

    .force-overflow {
        height: 5700px !important;
    }

    .roster-card {
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 1399px) {
        .content {
            height: 505px !important;
        }
        .force-overflow {
           height: 5050px !important;
        }
    }
    @media (max-width: 1199px) {
        padding-left: 5px;
        padding-right: 5px;
        .titlebar {
            padding: 10px 12px 0px;
        }
        .titlebar h3 {
            font-size: 24px;
        }
        .titlebar label {
            font-size: 21px;
        }

        .content {
            height: 435px !important;
        }
        .force-overflow {
            height: 4350px !important;
        }
        .col-sm-4 {
            margin-bottom: 48px !important;
            padding-left: 5px !important;
            padding-right: 5px !important;
        }
        .row {
            padding-right: 0px;
        }
    }
    @media (max-width: 991px) {
        margin-bottom: 24px;
        padding: 16px;

        .titlebar {
            padding: 0px;
        }

        .row {
            flex-wrap: initial;
        }
        .content {
            overflow-x: scroll;
            overflow-y: hidden;
            height: auto !important;
        }
        .force-overflow {
            width: 1000%;
            height: auto !important;
        }
        .force-overflow .row {
            width: 10%;
        }
        .small-scroll::-webkit-scrollbar {
            height: 10px;
        }
        .col-sm-4 {
            margin-bottom: 24px !important;
            display: flex;
        }
    }
    /* 
    @media (max-width: 767px) {
        width: 
    } 
    @media (max-width: 575px) {
        width: 
    }
    @media (max-width: 479px) {
        width: 
    }
    */
`