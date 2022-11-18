import { StyleSheet, Text, View } from "react-native"

export const Joke = ({ joke }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>
                {joke}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 130
    },
    text: {
        color:"black",
        fontFamily: "Inter",
        marginHorizontal: 24,
        marginBottom: 16,
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 38
    }
})