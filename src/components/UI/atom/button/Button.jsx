import styled from "styled-components";

export const BaseButton = styled.button`
    width: auto;
    height: auto;    
    font-size: 24px;
    text-shadow: 0px 3px 0px rgba(0, 0, 0, 0.35);
    font-family: AgencyFB-Bold;
    line-height: normal;
    filter: drop-shadow(rgba(0, 0, 0, 0.5) 5px 8px 3px);
    color: #FFF;
    padding: 4px 18px 9px;

    @media (max-width: 1199px) {
        font-size: 24px;
        line-height: 36px;
    }

    @media (max-width: 991px) {
        font-size: 20px;
        line-height: 30px;
    }

    @media (max-width: 767px) {
        font-size: 16px;
        line-height: 26px;
    }

    @media (max-width: 575px) {
        font-size: 14px;
        line-height: 24px;
    }
`