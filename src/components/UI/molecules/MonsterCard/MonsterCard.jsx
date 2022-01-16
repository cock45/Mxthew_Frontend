import styled from 'styled-components'
// import { CardHeader } from './CardHeader'
// import { CardImage } from './CardImage'
// import { DefenceRates } from "./DefenceRates"



export const Monstercard = (props) => {
    const monster = props.monster
    
    const SubBody = styled.div`
        background: url(${monster.background});
        background-size: 100% 100%;
        height: 360px;
        width: 192px;
        margin: auto;
        position: relative;
    `

    const CardBody = styled.div`
        background: url(${monster.image});
        position: relative;
        background-size: 100% 100%;
        text-align: center;
        color: white;
        font-size: 24px;
        line-height: 24px;
        
        margin: auto;
    `

    return (
        <>
            <CardBody className='monsterCard'>
                {/* <SubBody>
                    <CardHeader monster={monster}/>
                    <CardImage monster={monster}/>
                    <DefenceRates value={monster.defence} />
                </SubBody> */}
                {/* <p>Name: {monster.name}</p>
                <p>Rate: {monster.rate}</p>
                <p>Attr: {monster.attr}</p>
                <p>Defence: {monster.defence}</p> */}
            </CardBody>
        </>
    )
}
