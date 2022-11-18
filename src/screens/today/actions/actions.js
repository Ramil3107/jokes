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
 
    const joke = await jokesAPI.getProgrammingJoke()
    const fullJoke = {
        text: joke,
        isFavourite: false
    }

    const date = await getItem(DATE_KEY)
    const parsedDate = parseJSON(date)
    console.log(date)


    if ((date === null) || !isToday(parsedDate)) {
        setItem(DATE_KEY, JSON.stringify(today))
        setItem(CURRENT_JOKE, JSON.stringify(fullJoke))
        setJoke(fullJoke)
    } else if (isToday(parsedDate)) {
        const currentJoke = await getItem(CURRENT_JOKE)
        const parsedCurrentJoke = JSON.parse(currentJoke)
        setJoke(parsedCurrentJoke)
    }
}