import styled from 'styled-components'
import { BaseButton } from './Button'

export const FightButton = (props) => {
    const { children } = props

    return (
        <>
            <RedButton className="btn-fight">{children}</RedButton>
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
        width: 60%;
        height: 6vw;
        font-size: 2.5vw;
        margin-top: -10px;
        padding: 0;
        padding-bottom: 0.85vw;
    }

    @media (max-width: 767px) {
        height: 7vw;
        padding-bottom: 0.9vw;
    }

    @media (max-width: 575px) {
        margin-top: -7px;
        height: 7vw;
    }

    @media (max-width: 479px) {
        margin-top: -5px;
        width: 70%;
        height: 8vw;
        padding-bottom: 1vw;
    }

    @media (max-width: 300px) {
        margin-top: 0px;
    }
`;