import { TitleLabel } from '../../atom/label/TitleLabel'
import { StateLabel } from '../../atom/label/StateLabel'
import styled from 'styled-components'

export const StateLabelGroup = (props) => {
    return (
        <Body style={props.style} className={props.className}>
            <TitleLabel text={props.title} color={props.titleColor} />: <StateLabel text={props.count} color={props.textColor} />
        </Body>
    )
}

const Body = styled.div`
    line-height: 30px;
`