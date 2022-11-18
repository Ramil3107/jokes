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

    const joke = await jokesAPI.getProgrammingJoke()
    const fullJoke = {
        text: joke,
        isFavourite: false
    }

    const date = await getItem(DATE_KEY)
    const parsedDate = parseJSON(date)

    if ((date === null) || !isToday(parsedDate)) {
        setItem(DATE_KEY, today)
        setItem(CURRENT_JOKE, fullJoke)
        setJoke(fullJoke)
    } else if (isToday(parsedDate)) {
        const currentJoke = await getItem(CURRENT_JOKE)
        setJoke(currentJoke)
    }
}