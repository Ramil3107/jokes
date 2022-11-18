import { parseJSON } from "date-fns"
import { jokesAPI } from "../../../api/jokesAPI"
import { useAsyncStorage } from "../../../hooks/useAsyncStorage"
import { isToday } from "../../../utils/date"

const DATE_KEY = "DATE_KEY"
const CURRENT_JOKE = "CURRENT_JOKE"
const JOKES_HISTORY = "JOKES_HISTORY"
const today = new Date()

export const setAsyncStorage = async (setJoke) => {

    const { getItem, setItem, removeItem } = useAsyncStorage()

    // removeItem(DATE_KEY)
    // removeItem(CURRENT_JOKE)
    // removeItem(JOKES_HISTORY)

    const date = await getItem(DATE_KEY)   // get and parse date value from async storage
    const parsedDate = parseJSON(date)    

    if ((date === null) || !isToday(parsedDate)) {    //  if current date value null or not today date

        const joke = await jokesAPI.getProgrammingJoke()   // fetch joke from api and prepare object structure
        const fullJoke = {       
            text: joke,
            isFavourite: false
        }

        setItem(DATE_KEY, today)  // set current date value to storage
        setItem(CURRENT_JOKE, fullJoke)  // set daily joke to storage
        setJoke(fullJoke) // set daily joke to local state

        const jokeHistory = await getItem(JOKES_HISTORY)  

        if (jokeHistory === null) {                 // set new history to storage if storage hisstory == null
            const newHistory = [{ ...fullJoke }]
            setItem(JOKES_HISTORY, newHistory)
        }
        else {  // update storage history array
            const updatedHistory = [...jokeHistory, { ...fullJoke }]
            setItem(JOKES_HISTORY, updatedHistory)
        }

    } else if (isToday(parsedDate)) {
        const currentJoke = await getItem(CURRENT_JOKE)
        setJoke(currentJoke)
    }
}