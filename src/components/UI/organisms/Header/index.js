import { NavRewardsGroup } from "../../molecules/LabelGroup/NavRewardGroup"
import { NavClaimGroup } from "../../molecules/LabelGroup/NavClaimGroup"
import styled from "styled-components";

export const Header = () => {
    // const [rewardState, setRewardState] = useState(0);

    return (
        <Body>
            <NavRewardsGroup/>
            <NavClaimGroup/>
        </Body>
    );
}

const Body = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: block;
    }
`