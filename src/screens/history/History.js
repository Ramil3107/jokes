import { useEffect, useState } from "react"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { ScreenTitle } from "../../common/components/ScreenTitle"
import { useAsyncStorage } from "../../hooks/useAsyncStorage"
import { ListItem } from "./components/ListItem"

export const History = () => {

    const [isFavourite, setIsFavourite] = useState(false)
    const [jokeHistory, setJokeHistory] = useState([])
    const { getItem } = useAsyncStorage()

    const setHistory = async () => {
        const history = await getItem("JOKES_HISTORY")
        setJokeHistory(history)
    }

    useEffect(() => {
        setHistory()
    }, [])

    return (
        <SafeAreaView style={{flex:1}}>
            <ScreenTitle title="History" />

            <FlatList
                data={jokeHistory}
                renderItem={({ item }) => {
                    return (
                        <ListItem
                            text={item.text}
                            isFavourite={item.isFavourite}
                        />
                    )
                }}
                keyExtractor={item => item.text}
            />

        </SafeAreaView>
    )
}



