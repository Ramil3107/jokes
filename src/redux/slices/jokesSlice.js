import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    dailyJoke: {
        text: "",
        isFavourite: false
    },
    jokesHistory: []
}

const jokesSlice = createSlice({
    name: "jokeSlice",
    initialState,
    reducers: {
        setDailyJoke: (state, action) => {
            state.dailyJoke = action.payload
        },
        setJokesHistory: (state, action) => {
            state.jokesHistory = action.payload
        }
    }
})

export const { setDailyJoke, setJokesHistory } = jokesSlice.actions
export default jokesSlice.reducer