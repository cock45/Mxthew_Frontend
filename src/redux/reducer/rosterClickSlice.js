import { createSlice } from "@reduxjs/toolkit";

export const rosterClickSlice = createSlice({
    name: 'rosterClick',
    initialState: { value: -1 },
    reducers: {
        rosterClickHandler: state => {
            state.value *= -1;
        }
    }
})

export const { rosterClickHandler } = rosterClickSlice.actions

export default rosterClickSlice.reducer