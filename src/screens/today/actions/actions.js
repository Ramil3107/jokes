import { parseJSON } from "date-fns"
import { jokesAPI } from "../../../api/jokesAPI"
import { useAsyncStorage } from "../../../hooks/useAsyncStorage"
import { isToday } from "../../../utils/date"

const DATE_KEY = "DATE_KEY"
const CURRENT_JOKE = "CURRENT_JOKE"
const today = new Date()



export const setAsyncStorage = async (setJoke) => {

    const joke = await jokesAPI.getProgrammingJoke()

    const { getItem, setItem, removeItem } = useAsyncStorage()

    const date = await getItem(DATE_KEY)
    const parsedDate = parseJSON(date)

    if ((date === null) || !isToday(parsedDate)) {
        setItem(DATE_KEY, JSON.stringify(today))
        setItem(CURRENT_JOKE, JSON.stringify(joke))
        setJoke(joke)
    } else if (isToday(parsedDate)) {
        const currentJoke = await getItem(CURRENT_JOKE)
        setJoke(currentJoke)
    }
}