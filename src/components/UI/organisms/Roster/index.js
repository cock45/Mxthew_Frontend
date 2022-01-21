import "./style.css"
import { BattleDeck } from "components/UI/molecules/Rosters/BattleDeck"
import { CardCollection } from "components/UI/molecules/Rosters/CardCollection"
import { HistoryButton } from "components/UI/atom/button/HistoryButton"
import { useDispatch, useSelector } from "react-redux";
import { rosterClickHandler } from "redux/reducer/rosterClickSlice";

export const Roster = (props) => {
    // const monsters = [
    //     {
    //         name: 'Freethes',
    //         id: 123456,
    //         rate: 1,
    //         power: 12,
    //         acurracy: 12,
    //     }
    // ]
    // const deckMosters = [

    // ]
    const monsters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const isRoster = useSelector(state => state.rosterClick.value)
    const dispatch = useDispatch()

    return (
        <>
            <div className="container">
                <div className="main">
                    <BattleDeck monsters={monsters} />
                    <CardCollection />
                </div>
            </div>
            <HistoryButton
                className="d-none d-md-none d-lg-block btn-battle pull-right"
                onClick={() => dispatch(rosterClickHandler())}
            >
                {isRoster > 0 ? "BATTLE" : "ROSTER"}
            </HistoryButton>
            <div className="clearfix"></div>
        </>
    )
}