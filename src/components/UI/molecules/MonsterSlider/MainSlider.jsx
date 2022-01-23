import styled from "styled-components"
import { Monstercard } from "../MonsterCard/MonsterCard"
import { FightButton } from "components/UI/atom/button/FightButton"

export const MainSlider = (props) => {
    const monsters = props.monsters

    return (
        <Body className="container">
            <div className="row">
                {monsters.map(monster => (
                    <div className="col-md-3">
                        <Monstercard
                            monster={monster}
                        />
                        <FightButton>Fight!!!</FightButton>
                    </div>
                ))}
            </div>
        </Body>
    )
}

const Body = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 0px 120px;
    text-align: center;

    .monsterCard {
        width: 215px;
        height: 340px;
    }

    @media (max-width: 1399px) {
        padding: 0px 30px;
    }
    @media (max-width: 1199px) {
        padding: 0px;
    }
`