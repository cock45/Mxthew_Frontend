import styled from 'styled-components'
import { BaseButton } from './Button'

export const FightButton = (props) => {
    const { children } = props

    return (
        <>
            <RedButton>{children}</RedButton>
        </>
    )
}

const RedButton = styled(BaseButton)`
    background: url('./Images/Buttons/fight-button.png');
    background-size: 100% 100%;
    font-family: none !important;
    border: none;
    padding: 12px 32px 22px;
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    text-shadow: 0px 3px 0px rgba(0, 0, 0, 0.35);
    font-size: 24px;

    @media (max-width: 1199px) {
        padding: 9px 30px 19px;
    }

    @media (max-width: 991px) {
        padding: 5px 28px 15px;
    }

    @media (max-width: 767px) {
        padding: 4px 24px 12px;
    }

    @media (max-width: 575px) {
        line-height: 24px;
    }
`;