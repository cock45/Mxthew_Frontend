import React from 'react'
import { BaseSlider } from "./BaseSlider"
import styled from "styled-components"

export const SmSlider = (props) => {
    const monsters = props.monsters
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const handleResize = (e) => {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return (
        <Body>
            <BaseSlider
                monsters={monsters}
                hidebtn="true"
            />
        </Body>
    )
}

const Body = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 540px;
    .slick-dots {
        display: none;
    }
    .slick-track {
        margin-bottom: 30px;
    }

    .monsterCard {
        width: 132px;
        height: 240px;
    }

    .slick-dots .slick-active {
        border: 1px solid black;
        border-radius: 50%;
    }

    .slick-dots .slick-active button {
        filter: blur(2px);
    }

    @media (max-width: 991px) {
        width: 700px;
        margin-top: 30px;
        .monsterCard {
            width: 200px;
            height: 350px;
        }
        .slick-dots {
            display: block;
            bottom: 12px;
        }
    }

    @media (max-width: 767px) {
        width: 520px;
        margin-top: 20px;
        .monsterCard {
            width: 150px;
            height: 240px;
        }
        .slick-dots.slick-thumb li {
            margin: 0px 3px;
        }
        .slick-dots.slick-thumb li button {
            width: 16px;
            height: 16px;
        }
        .slick-dots .slick-active {
            border: none;
        }
        .nextArrow {
            right: 14%;
        }
        .prevArrow {
            left: 14%;
        }
    }

    @media (max-width: 575px) {
        width: 90vw;
        margin-top: 0px;
        .monsterCard {
            width: 26vw;
            height: 42vw;
        }
        .slick-dots.slick-thumb li {
            margin: 1px;
        }
        .slick-dots.slick-thumb li button {
            width: 14px;
            height: 14px;
        }
        .slick-list {
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }
    
    @media (max-width: 479px) {
        .slick-dots.slick-thumb li button {
            width: 12px;
            height: 12px;

        }
        .slick-dots.slick-thumb li {
            margin: 0px;
        }
        .slick-list {
            padding-top: 0px !important;
        }
    }
`