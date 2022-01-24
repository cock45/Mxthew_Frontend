import { createSlice } from "@reduxjs/toolkit"

export const rostersCounterSlice = createSlice({
    name: 'rosterCounter',
    initialState: {
        collection: 50,
        battle: 2,
    },
    reducers: {
        deployBattle: state => {
            state.collection -= 1;
            state.battle += 1;
        },
        removeBattle: state => {
            state.collection += 1;
            state.battle -= 1;
        }
    }
})

export const { deployBattle, removeBattle } = rostersCounterSlice.actions

export default rostersCounterSlice.reducer