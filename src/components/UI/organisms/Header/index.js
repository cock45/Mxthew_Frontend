import { NavRewardsGroup } from "../../molecules/LabelGroup/NavRewardGroup"
import { NavClaimGroup } from "../../molecules/LabelGroup/NavClaimGroup"
import styled from "styled-components";

export const Header = () => {
    // const [rewardState, setRewardState] = useState(0);

    return (
        <Body>
            <NavRewardsGroup />
            <NavClaimGroup />
        </Body>
    );
}

const Body = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    text-align: center;
    padding: 0px 10px 0px 50px;
    
    @media (max-width: 1200px) {
        padding: 0px 10px 0px 10px;
    }

    @media (max-width: 992px) {
        padding: 0px;
        display: block;
    }
`