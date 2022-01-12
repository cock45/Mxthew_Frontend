import styled from 'styled-components'
import { BaseButton } from './Button'

export const PrimaryButton = (props) => {
    const { children } = props

    return (
        <>
            <YellowButton onClick={props.onClick}>{children}</YellowButton>
        </>
    )
}

const YellowButton = styled(BaseButton)`
    background: url('./Images/Buttons/claim-button.23a369a7.png');
    background-size: 100% 100%;
    width: auto;
    height: auto;
    text-shadow: 2px 2px 1px #000;
    filter: drop-shadow(5px 8px 3px rgba(0,0,0,.5));
    border: none;
    line-height: 45px;

    @media (max-width: 992px) {
        font-size: 20px;
        line-height: 30px;
    }

    @media (max-width: 576px) {
        font-size: 14px;
        line-height: 24px;
    }
`;