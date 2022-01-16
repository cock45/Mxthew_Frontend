import styled from "styled-components";

export const BaseButton = styled.button`
    width: auto;
    height: auto;    
    font-size: 24px;
    text-shadow: #F00 2px 2px 1px;
    font-family: AgencyFB-Bold;
    line-height: normal;
    filter: drop-shadow(rgba(0, 0, 0, 0.5) 5px 8px 3px);
    color: #FFF;
    padding: 4px 18px 9px;

    @media (max-width: 992px) {
        font-size: 20px;
    }
`