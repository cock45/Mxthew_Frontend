import styled from "styled-components"
import { BaseSlider } from "./BaseSlider"

export const BgSlider = (props) => {
    const monsters = props.monsters

    return (
        <Body>
            <BaseSlider
                monsters={monsters}
            />
        </Body>
    )
}

const Body = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;

    width: 700px;
    .monsterCard {
        width: 210px;
        height: 320px;
    }

    @media (max-width: 768px) {
        width: 520px;
        margin-top: 20px;
        .monsterCard {
            width: 170px;
            height: 270px;
        }
    }

    @media (max-width: 576px) {
        width: 90vw;
        margin-top: 0px;
        .monsterCard {
            width: 30vw;
            height: 27vh;
        }
    }
`