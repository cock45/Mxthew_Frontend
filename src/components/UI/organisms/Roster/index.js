import "./style.css"
import { BattleDeck } from "components/UI/molecules/Rosters/BattleDeck"
import { CardCollection } from "components/UI/molecules/Rosters/CardCollection"

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

    return (
        <div className="container">
            <div className="main">
                <BattleDeck monsters={monsters} />
                <CardCollection />
            </div>
        </div>
    )
}