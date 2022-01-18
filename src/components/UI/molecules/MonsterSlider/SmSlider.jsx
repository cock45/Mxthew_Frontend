import { BaseSlider } from "./BaseSlider"
import styled from "styled-components"

export const SmSlider = (props) => {
    const monsters = props.monsters

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
    width: 520px;
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

    @media (max-width: 992px) {
        width: 560px;
        margin-top: 30px;
        .monsterCard {
            width: 150px;
            height: 270px;
        }
        .slick-dots {
            display: block;
            bottom: 12px;
        }
    }

    @media (max-width: 768px) {
        width: 420px;
        margin-top: 20px;
        .monsterCard {
            width: 120px;
            height: 200px;
        }
    }

    @media (max-width: 576px) {
        width: 90vw;
        margin-top: 0px;
        .monsterCard {
            width: 25vw;
            height: 27vh;
        }
    }
`