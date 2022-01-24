import { configureStore } from "@reduxjs/toolkit"
import rosterClickReducer from "./reducer/rosterClickSlice"
import rosterCounterReducer from "./reducer/rostersCounterSlice"

export default configureStore({
    reducer: {
        rosterClick: rosterClickReducer,
        rosterCounter: rosterCounterReducer,
    }
})