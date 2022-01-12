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
    background: url('./Images/Buttons/fight-button.47c09368.png');
    background-size: 100% 100%;
    width: calc(100% - 10px);
    height: auto;
    font-size: 38px;
    text-shadow: 2px 3px 3px #000;
    padding: 4px 18px 9px;
    filter: drop-shadow(5px 8px 2px rgba(0,0,0,.7));
    border: none;
    margin-bottom: 10px;

    @media (max-width: 1200px) {
        font-size: 26px;
        line-height: 36px;
    }

    @media (max-width: 992px) {
        width: 70%;
        font-size: 20px;
        padding: 0px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 26px;
    }

    @media (max-width: 576px) {
        font-size: 14px;
        line-height: 24px;
    }
`;