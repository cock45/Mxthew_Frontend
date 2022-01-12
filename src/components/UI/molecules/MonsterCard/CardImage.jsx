import styled from "styled-components"
import { DefenceRates } from "./DefenceRates"

export const CardImage = (props) => {
    const monster = props.monster
    const width = 50 + 10* monster.rate + '%';

    return (
        <div style={{
            position: 'relative'
        }}>
            <div style={{textAlign: 'center'}}>
                <img src={monster.nft} 
                    style={{
                        width: width,
                    }}
                />
            </div>
        </div>
    )
}
