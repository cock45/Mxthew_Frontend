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
    border: none;
    font-size: 28px;
    padding: 12px 40px 22px;
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    text-shadow: 0px 3px 0px rgba(0, 0, 0, 0.35);

    @media (max-width: 1200px) {
        font-size: 26px;
        line-height: 36px;
        padding: 9px 30px 19px;
    }

    @media (max-width: 992px) {
        font-size: 20px;
        padding: 5px 28px 15px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 26px;
        padding: 4px 24px 12px;
    }

    @media (max-width: 576px) {
        font-size: 14px;
        line-height: 24px;
    }
`;