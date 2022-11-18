import AsyncStorage from "@react-native-community/async-storage";
import { useEffect, useMemo, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { jokesAPI } from "../../api/jokesAPI";
import { Like } from "../../common/components/Like";
import { ScreenTitle } from "../../common/components/ScreenTitle";
import { useAsyncStorage } from "../../hooks/useAsyncStorage";
import { isToday } from "../../utils/date";
import { setAsyncStorage } from "./actions/actions";
import { Joke } from "./components/Joke";


export const Today = () => {

  const [isActive, setIsActive] = useState(false)
  const [joke, setJoke] = useState("")


  useEffect(() => {
    setAsyncStorage(setJoke)
  }, [])


  return (
    <SafeAreaView style={{ flex: 1 }}>

      <ScreenTitle title="Today" />

      <ScrollView >

        <Joke joke={joke} />

        <Like
          active={isActive}
          handlePress={() => setIsActive(!isActive)}
          height={64}
          width={64}
          iconHeight={28}
          iconWidth={28}
        />

      </ScrollView>

    </SafeAreaView>
  )
}

