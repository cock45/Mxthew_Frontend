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
    padding: 12px 40px 22px;
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    text-shadow: 0px 3px 0px rgba(0, 0, 0, 0.35);

    @media (min-width: 1200px) {
        font-size: 28px;
    }

    @media (max-width: 1200px) {
        padding: 9px 30px 19px;
    }

    @media (max-width: 992px) {
        padding: 5px 28px 15px;
    }

    @media (max-width: 768px) {
        padding: 4px 24px 12px;
    }

    @media (max-width: 576px) {
        line-height: 24px;
    }
`;