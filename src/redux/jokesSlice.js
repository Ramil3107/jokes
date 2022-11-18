import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    dailyJoke: "",
    jokesHistory: []
}

const jokesSlice = createSlice({
    name: "jokeSlice",
    initialState,
    reducers: {

    }
})


export default jokesSlice.reducer