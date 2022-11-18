import { useEffect, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { useDispatch, useSelector } from "react-redux";
import { Like } from "../../common/components/Like";
import { ScreenTitle } from "../../common/components/ScreenTitle";
import { handleIsFavouriteThunk, setAsyncStorageThunk } from "../../redux/thunks/jokesThunks";
import { Joke } from "./components/Joke";

export const Today = () => {

  const dispatch = useDispatch()
  const [refreshing, setRefreshing] = useState(false);
  const { dailyJoke } = useSelector(state => state.jokes)

  const isFavouriteHandler = () => {
    dispatch(handleIsFavouriteThunk(dailyJoke))
  }

  const setStorage = () => {
    dispatch(setAsyncStorageThunk())
  }

  useEffect(() => {
    setStorage() 
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <ScreenTitle title="Today" />

      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={setStorage} />}>

        <Joke joke={dailyJoke.text} />

        <Like
          active={dailyJoke.isFavourite}
          handlePress={isFavouriteHandler}
          height={64}
          width={64}
          iconHeight={28}
          iconWidth={28}
        />

      </ScrollView>

    </SafeAreaView>
  )
}

