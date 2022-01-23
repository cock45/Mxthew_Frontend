import styled from "styled-components"
import React from "react"
import { RosterCard } from "./RosterCard"
// import { BlankCard } from "./BlankCard"
import { StateLabelGroup } from "../LabelGroup/StateLabelGroup"
import Slider from "react-slick"
import { MyScrollbar } from "../Scrollbar"
import { useState } from "react"

export const CardCollection = (props) => {
    const [currentPage, setCurrentPage] = useState(0)
    // const handlePrevSlide = () => {
    //     slider.current.slickPrev();
    //     currentPage > 1 && setCurrentPage(currentPage - 1);
    // };
    // const handleNextSlide = () => {
    //     slider.current.slickNext();
    //     currentPage < pageCounter && setCurrentPage(currentPage + 1);
    // };

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
            return <button />;
        },
        appendDots: dots => (
            <div>
                <ul className="slick-dots slick-thumb">
                    {dots}
                </ul>
            </div>
        ),
        afterChange: (current, next) => {
            setCurrentPage(current)
        }
    };
    const pages = [1, 2, 3, 4, 5]
    const totalPages = pages.length

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
            <Slider {...settings} className="d-none d-md-none d-lg-block">
                {pages.map(page => (
                    <div>
                        <div className="row">
                            <div className="col-lg-3">
                                <RosterCard button="Deploy" />
                            </div>
                            <div className="col-lg-3">
                                <RosterCard button="Deploy" />
                            </div>

                            <div className="col-lg-3">
                                <RosterCard button="Deploy" />
                            </div>
                            <div className="col-lg-3">
                                <RosterCard button="Deploy" />
                            </div>
                            <div className="col-lg-3">
                                <RosterCard button="Deploy" />
                            </div>
                            <div className="col-lg-3">
                                <RosterCard button="Deploy" />
                            </div>
                            <div className="col-lg-3">
                                <RosterCard button="Deploy" />
                            </div>

                            <div className="col-lg-3">
                                <RosterCard button="Deploy" />
                            </div>
                            <div className="col-lg-3">
                                <RosterCard button="Deploy" />
                            </div>
                            <div className="col-lg-3">
                                <RosterCard button="Deploy" />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <MyScrollbar className="d-block d-md-block d-lg-none">
                <div className="row">
                    <div className="col-6 col-sm-4">
                        <RosterCard button="Deploy" />
                    </div>
                    <div className="col-6 col-sm-4">
                        <RosterCard button="Deploy" />
                    </div>

                    <div className="col-6 col-sm-4">
                        <RosterCard button="Deploy" />
                    </div>
                    <div className="col-6 col-sm-4">
                        <RosterCard button="Deploy" />
                    </div>
                    <div className="col-6 col-sm-4">
                        <RosterCard button="Deploy" />
                    </div>
                    <div className="col-6 col-sm-4">
                        <RosterCard button="Deploy" />
                    </div>
                    <div className="col-6 col-sm-4">
                        <RosterCard button="Deploy" />
                    </div>

                    <div className="col-6 col-sm-4">
                        <RosterCard button="Deploy" />
                    </div>
                    <div className="col-6 col-sm-4">
                        <RosterCard button="Deploy" />
                    </div>
                    <div className="col-6 col-sm-4">
                        <RosterCard button="Deploy" />
                    </div>
                </div>
            </MyScrollbar>
            <div className="page-number">{currentPage + 1}/{totalPages}</div>
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
    position: relative;

    .titlebar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px 0px 16px;
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

    /* Slick Styles */
    .slick-slide {
        text-align: inherit !important;
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

    /* Slick Page Number */
    .page-number {
        position: absolute;
        left: calc(50% + 70px);
        font-size: 24px;
        color: #fff;
        bottom: 10px;
    }

    @media (max-width: 1199px) {
        padding-bottom: 30px;
        .titlebar h3 {
            font-size: 24px;
        }
        .titlebar label {
            font-size: 22px;
        }
        .row {
            padding-left: 8px;
            padding-right: 5px;
        }
        .col-lg-3 {
            padding: 0 !important;
        }
        .slick-dots {
            bottom: -12px;
        }
        .page-number {
            bottom: 5px;
        }
    }

    @media (max-width: 991px) {
        padding-right: 5px;
        .titlebar {
            padding: 20px 0px 0px 16px;
        }
        .content {
            overflow-x: hidden;
            overflow-y: scroll;
            width: auto !important;
            height: 90vh;
            margin-top: 20px;
            padding-right: 5px;
        }
        .force-overflow {
            height: 900vh !important;
        }
        .row {
            padding: 0px;
        }
        .col-sm-4 {
            margin-bottom: 36px;
        }
    }

    @media (max-width: 575px) {
        padding-right: 10px;
    }
`