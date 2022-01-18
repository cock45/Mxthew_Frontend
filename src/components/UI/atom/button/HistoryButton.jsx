import styled from 'styled-components'
import { BaseButton } from './Button'

export const HistoryButton = (props) => {
    const { children } = props

    return (
        <>
            <YellowButton onClick={props.onClick} className={props.className}>{children}</YellowButton>
        </>
    )
}

const YellowButton = styled(BaseButton)`
    background: url('./Images/Buttons/claim-button.23a369a7.png');
    background-size: 100% 100%;
    font-weight: bold;
    line-height: 1.2;
    padding: 8px 35px 12px;
    text-shadow: 2px 2px 1px #000;
    border-style: solid;
    border-color: rgb(0, 0, 0);
    border-radius: 17px;
    margin-right: 20px;

    @media (max-width: 768px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`