import styled from "styled-components"
import { BaseLabel } from "components/UI/atom/label/Label"
import { StarBadge } from "components/UI/atom/badge/StarBadge"

export const CardHeader = (props) => {
    const monster = props.monster

    return (
        <Body>
            <Line>
                <NameLabel>{monster.name}</NameLabel>
                <StarBadge rate={monster.rate} />
            </Line>
            <Line>
                <AttrLabel>{monster.attr}</AttrLabel>
                <NftNameLabel>{monster.nftName}</NftNameLabel>    
            </Line>
        </Body>
    )
}

const Body = styled.div`
    background: url('./Images/Assets/card-name-board-v5.1444446f.png');
    background-size: 100% 100%;
    width: calc(100% - 30px);
    margin: auto;
`

const NameLabel = styled(BaseLabel)`
    font-size: 20px;
    color: #FFF;
    font-weight: 700;
`

const AttrLabel = styled(BaseLabel)`
    font-size: 16px;
    color: #000;
    font-weight: 700;
`

const NftNameLabel = styled(BaseLabel)`
    font-size: 10px;
    color: #FFF;
    font-weight: 700;
`

const Line = styled.div`
    display: flex;
    justify-content: space-between;
`