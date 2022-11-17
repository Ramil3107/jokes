import { useState } from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Like } from "../../common/components/Like"
import { ScreenTitle } from "../../common/components/ScreenTitle"
import { ListItem } from "./components/ListItem"

export const History = () => {

    const [isFavourite, setIsFavourite] = useState(false)

    return (
        <SafeAreaView>
            <ScreenTitle title="History" />

            <ListItem
                likeHandle={() => setIsFavourite(!isFavourite)}
                isFavourite={isFavourite}
                text="How do you know God is a shitty programmer? He wrote the OS for an entire universe, but didn't leave a single useful comment." />



        </SafeAreaView>
    )
}



