import { configureStore } from "@reduxjs/toolkit"
import rosterClickReducer from "./reducer/rosterClickSlice"

export default configureStore({
    reducer: {
        rosterClick: rosterClickReducer,
    }
})