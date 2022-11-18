import { FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux"
import { ScreenTitle } from "../../common/components/ScreenTitle";
import { handleIsFavouriteThunk } from "../../redux/thunks/jokesThunks";
import { ListItem } from "../history/components/ListItem";
import { EmptyState } from "./components/EmptyState";


export const Favourites = () => {

    const dispatch = useDispatch()
    const { jokesHistory } = useSelector(state => state.jokes)

    const isFavouriteHandler = (item) => {
        dispatch(handleIsFavouriteThunk(item))
    }

    const favouriteJokes = jokesHistory.filter(joke => joke.isFavourite)

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScreenTitle title="Favourites" />

            {
                favouriteJokes.length > 0 ? <FlatList
                    data={favouriteJokes}
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
                    : <EmptyState />

            }

        </SafeAreaView>
    )
}



