import styled from "styled-components"
import { BaseSlider } from "./BaseSlider"

export const BgSlider = (props) => {
    const monsters = props.monsters

    return (
        <Body>
            <BaseSlider
                monsters={monsters}
                isEnemy={true}
            />
        </Body>
    )
}

const Body = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    transition-delay: 2s, 4ms;
    width: 80vw;
    .monsterCard {
        width: 210px;
        height: 320px;
    }
    .slick-dots {
        bottom: 0px !important;
    }
    .btn-fight {
        display: none;
    }

    .slick-current .btn-fight {
        display: block !important;
    }


    @media (max-width: 767px) {
        margin-top: 20px;
        .monsterCard {
            width: 170px;
            height: 270px;
        }
    }

    @media (max-width: 575px) {
        margin-top: 0px;
        .monsterCard {
            width: 30vw;
            height: 27vh;
        }
        .slick-dots {
            bottom: 20px !important;
        }
    }

    @media (max-width: 479px) {
        .slick-dots {
            bottom: 30px !important;
        }
    }

    @media (max-width: 320px) {
        .slick-dots {
            bottom: 20px !important;
        }
    }
`