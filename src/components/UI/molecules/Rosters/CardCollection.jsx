import styled from "styled-components"
import { RosterCard } from "./RosterCard"
// import { BlankCard } from "./BlankCard"
import { StateLabelGroup } from "../LabelGroup/StateLabelGroup"

export const CardCollection = (props) => {

    return (
        <Collection className="card-collection">
            <div className="container">
                <div className="titlebar">
                    <h3>Card Collection</h3>
                    <StateLabelGroup
                        title="Total Character"
                        titleColor="#00fffc"
                        count="15"
                    />
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <RosterCard button="Deploy" />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <RosterCard button="Deploy" />
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <RosterCard button="Deploy" />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <RosterCard button="Deploy" />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <RosterCard button="Deploy" />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <RosterCard button="Deploy" />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <RosterCard button="Deploy" />
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <RosterCard button="Deploy" />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <RosterCard button="Deploy" />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <RosterCard button="Deploy" />
                    </div>
                </div>
            </div>
        </Collection>
    )
}

const Collection = styled.div`
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
        margin-top: 10px;
        margin-bottom: 40px;
        padding-right: calc(var(--bs-gutter-x) * .5);
        padding-left: calc(var(--bs-gutter-x) * .5);
    }

    .content {
        height: 60vh;
    }

    .col-lg-3 {
        width: 20% !important;
    }
`