import styled from "styled-components";
import { Star } from "./Star";

export const StarBadge = (props) => {
    const rate = props.rate
    let stars = [];
    for(let i = 0; i < rate; i++) {
        stars.push(i);
    }

    return (
        <Body>
            {
                stars.map(star => (
                    <img src="./Images/Assets/star.png" style={{width: '16px'}}/>
                ))
            }
        </Body>
    )
}

const Body = styled.div`
    display: inline-block;
`