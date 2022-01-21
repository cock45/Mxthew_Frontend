import { CardSlice } from "components/UI/organisms/Sliders"
import { Roster } from "components/UI/organisms/Roster"
import { useSelector } from "react-redux";

const Home = () => {
    const isRoster = useSelector(state => state.rosterClick.value)

    return (
        (isRoster < 0 ?
            <CardSlice />
            :
            <Roster />
        )
    )
}

export default Home