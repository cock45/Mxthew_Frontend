import { DefenceLabel } from "components/UI/atom/label/DefenseLabel"
import styled from "styled-components"

export const DefenceRates = (props) => {
    const defenceValue = props.value

    return (
        <Body>
            <img src="./Images/Assets/shield.da6f6953.png" 
                style={{
                    width: '39.34px',
                    position: 'absolute',
                    left: '-13px',
                    top: '50%',
                    transform: 'translate(0, -50%)'
                }}
            />
            <DefenceLabel value={defenceValue} />
        </Body>
    )
}

const Body = styled.div`
    position: relative;
    text-align: center;
    background-color: brown;
    width: 150px;
    margin: auto;
    padding: 2px;
`