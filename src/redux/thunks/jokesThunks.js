import { createAsyncThunk } from "@reduxjs/toolkit"
import { parseJSON } from "date-fns"
import { jokesAPI } from "../../api/jokesAPI"
import { useAsyncStorage } from "../../hooks/useAsyncStorage"
import { isToday } from "../../utils/date"
import { setDailyJoke, setJokesHistory } from "../slices/jokesSlice";

const DATE_KEY = "DATE_KEY"
const CURRENT_JOKE = "CURRENT_JOKE"
const JOKES_HISTORY = "JOKES_HISTORY"
const today = new Date()

export const setAsyncStorageThunk = createAsyncThunk(
    "jokes/setAsyncStorageThunk",
    async (_, { dispatch }) => {
        const { getItem, setItem, removeItem } = useAsyncStorage()

        // removeItem(DATE_KEY)
        // removeItem(CURRENT_JOKE)
        // removeItem(JOKES_HISTORY)

        const date = await getItem(DATE_KEY)   // get and parse date value from async storage
        const parsedDate = parseJSON(date)

        if ((date === null) || !isToday(parsedDate)) {    //  if current date value == null or not today date

            const response = await jokesAPI.getProgrammingJoke()   // fetch joke from api and prepare object structure
            const joke = {
                text: response,
                isFavourite: false
            }

            setItem(DATE_KEY, today)  // set current date value to async storage
            setItem(CURRENT_JOKE, joke)  // set daily joke to async storage
            dispatch(setDailyJoke(joke))// set daily joke to redux store

            const jokeHistory = await getItem(JOKES_HISTORY) // get joke history from async storage

            if (jokeHistory === null) {                 // set new history to storage and redux store, if storage history == null
                const newHistory = [{ ...joke }]
                dispatch(setJokesHistory(newHistory))
                setItem(JOKES_HISTORY, newHistory)
            }
            else {                                       // update jokes history on async storage and redux
                const updatedHistory = [...jokeHistory, { ...joke }]
                dispatch(setJokesHistory(updatedHistory))
                setItem(JOKES_HISTORY, updatedHistory)

            }

        } else if (isToday(parsedDate)) {   // if async storage date == today date, get daily joke and set it to local state
            const currentJoke = await getItem(CURRENT_JOKE)
            const jokesHistory = await getItem(JOKES_HISTORY)
            dispatch(setDailyJoke(currentJoke))
            dispatch(setJokesHistory(jokesHistory))
        }
    })

export const handleIsFavouriteThunk = createAsyncThunk(
    "jokes/handleIsFavourite",
    async (joke, { dispatch, getState }) => {

        const { setItem } = useAsyncStorage()
        const { dailyJoke, jokesHistory } = getState().jokes

        const updatedJoke = {     // prepare joke with updated isFavourite status
            text: joke.text,
            isFavourite: !joke.isFavourite
        }

        const updatedHistory = jokesHistory.map(jokeFromHistory => {   // prepare updated history array
            if (joke.text === jokeFromHistory.text) {
                return updatedJoke
            } else {
                return jokeFromHistory
            }
        })

        if (joke.text === dailyJoke.text) {
            dispatch(setDailyJoke(updatedJoke))
            dispatch(setJokesHistory(updatedHistory))
            setItem(CURRENT_JOKE, updatedJoke)
            setItem(JOKES_HISTORY, updatedHistory)
        }
    })