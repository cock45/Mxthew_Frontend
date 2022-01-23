import styled from "styled-components";

export const StarBadge = (props) => {
    const rate = props.rate
    const limit = props.limit
    const activeColor = props.activeColor
    const blankColor = props.blankColor

    let colors = [];
    for (let i = 0; i < limit; i++) {
        if (i < rate) {
            colors.push(activeColor)
        } else {
            colors.push(blankColor)
        }
    }

    return (
        <Body>
            {
                colors.map(color => (
                    < i className="fa fa-star" style={{ color: color }} />
                ))
            }
        </Body>
    )
}

const Body = styled.div`
    display: inline-block;
    flex: 1;
`