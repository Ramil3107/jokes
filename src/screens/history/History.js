import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Like } from "../../common/components/Like"
import { ScreenTitle } from "../../common/components/ScreenTitle"

export const History = () => {
    return (
        <SafeAreaView>
            <ScreenTitle title="History" />

            <View style={styles.wrapper}>

                <Text style={styles.text}>
                    How do you know God is a shitty programmer? He wrote the OS for an entire universe, but didn't leave a single useful comment.
                </Text>

                <Like
                    width={48}
                    height={48}
                    iconHeight={28}
                    iconWidth={28}
                />
            </View>


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        marginVertical: 24,
        marginLeft: 24
    },
    text: {
        width: 259,
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 26
    }
})
