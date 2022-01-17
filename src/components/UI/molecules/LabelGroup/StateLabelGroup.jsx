import { TitleLabel } from '../../atom/label/TitleLabel'
import { StateLabel } from '../../atom/label/StateLabel'
import styled from 'styled-components'

export const StateLabelGroup = (props) => {
    return (
        <Body>
            <TitleLabel text={props.title} />: <StateLabel text={props.count} color={props.textColor} />
        </Body>
    )
}

const Body = styled.div`
    line-height: 30px;
`