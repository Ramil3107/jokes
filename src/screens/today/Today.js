import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context"
import { Like } from "../../common/components/Like";
import { ScreenTitle } from "../../common/components/ScreenTitle";
import { Joke } from "./Joke";

export const Today = () => {

  const [isActive, setIsActive] = useState(false)

  return (
    <SafeAreaView>

      <ScreenTitle title="Today" />

      <Joke joke="How do you know God is a shitty programmer? He wrote the OS for an entire universe, but didn't leave a single useful comment." />

      <Like
        active={isActive}
        handlePress={() => setIsActive(!isActive)}
      />

    </SafeAreaView>
  )
}

