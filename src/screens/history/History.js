import { FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux"
import { ScreenTitle } from "../../common/components/ScreenTitle"
import { handleIsFavouriteThunk } from "../../redux/thunks/jokesThunks"
import { ListItem } from "./components/ListItem"

export const History = () => {

    const dispatch = useDispatch()
    const { jokesHistory } = useSelector(state => state.jokes)

    const isFavouriteHandler = (item) => {
        dispatch(handleIsFavouriteThunk(item))
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScreenTitle title="History" />

            <FlatList
                data={jokesHistory}
                renderItem={({ item }) => {
                    return (
                        <ListItem
                            handleIsFavourite={() => isFavouriteHandler(item)}
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



