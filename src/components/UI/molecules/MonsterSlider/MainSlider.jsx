import styled from "styled-components"
import { FightButton } from "components/UI/atom/button/FightButton"
import Card from "../Card"

export const MainSlider = (props) => {
    const monsters = props.monsters

    return (
        <Body className="container">
            <div className="row">
                {monsters.map(monster => (
                    <div className="col-md-3 monster-container">
                        <Card level={monster.rate} isEnemyCard={true} isAnimated={true} width={200} />
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
    .monster-container {
        display: flex; 
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 1399px) {
        padding: 0px 30px;
    }
    @media (max-width: 1199px) {
        padding: 0px;
    }
`