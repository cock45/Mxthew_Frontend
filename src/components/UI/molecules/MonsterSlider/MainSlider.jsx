import styled from "styled-components"
import { Monstercard } from "../MonsterCard/MonsterCard"
import { FightButton } from "components/UI/atom/button/FightButton"

export const MainSlider = (props) => {
    const monsters = props.monsters

    return (
        <Body>
            <div className="row">
                {monsters.map(monster => (
                    <div className="col-3">
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
    text-align: center;

    width: 1000px;

    .monsterCard {
        width: 215px;
        height: 340px;
    }

    @media (max-width: 1300px) {
        width: 800px;
        .monsterCard {
            width: 170px;
            height: 270px;
        }
    }
`