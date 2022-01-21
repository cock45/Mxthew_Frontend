import styled from "styled-components"
import { RosterCard } from "./RosterCard"
// import { BlankCard } from "./BlankCard"
import { StateLabelGroup } from "../LabelGroup/StateLabelGroup"
import Slider from "react-slick"

export const CardCollection = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 300,
        breakpoint: 600,

        customPaging: function (i) {
            return <div className="dot"></div>;
        },
        appendDots: dots => (
            <div>
                <ul className="slick-dots slick-thumb">
                    {dots}
                </ul>
            </div>
        ),
        customPaging: i => (
            <button />
        ),
    };
    const pages = [1, 2, 3, 4, 5]

    return (
        <Collection className="card-collection">
            <div className="titlebar">
                <h3>Card Collection</h3>
                <StateLabelGroup
                    title="Total Character"
                    titleColor="#00fffc"
                    count="15"
                />
            </div>
            <Slider {...settings}>
                {pages.map(page => (
                    <div>
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
                ))}
            </Slider>
        </Collection>
    )
}

const Collection = styled.div`
    padding-bottom: 40px;
    border-style: solid;
    border-width: 3px;
    border-color: rgb(255, 255, 255);
    border-radius: 28px;
    background-image: -moz-linear-gradient( 90deg, rgb(0,0,0) 0%, rgb(1,39,97,.5) 100%);
    background-image: -webkit-linear-gradient( 90deg, rgb(0,0,0) 0%, rgb(1,39,97,.5) 100%);
    background-image: -ms-linear-gradient( 90deg, rgb(0,0,0) 0%, rgb(1,39,97,.5) 100%);
    background-color: rgba(0, 0, 0, 0.851);

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

    .content {
        height: 60vh;
    }

    .col-lg-3 {
        width: 20% !important;
        margin-bottom: 30px;
    }

    .row {
        margin: 0px;
    }
    .slick-slide.slick-current {
        transform: scale(1) !important;
    }
    .slick-slide img {
        width: auto;
        display: inline-block;
    }
    .slick-slider {
        text-align: inherit;
    }
    .slick-track {
        padding: 0px !important;
        margin: 0px !important;
    }
    .slick-arrow {
        display: none !important;
    }
    .slick-dots {
        bottom: -14px;
    }
    .slick-dots.slick-thumb li button {
        width: 12px;
        height: 12px;
    }
    .slick-dots.slick-thumb li.slick-active button {
        filter: blur(2px);
    }
    .slick-dots li {
        width: 12px;
    }
`