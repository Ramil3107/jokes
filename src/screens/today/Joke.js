import { StyleSheet, Text, View } from "react-native"

export const Joke = ({joke}) => {
    return (
        <View>
            <Text style={styles.text}>
                {joke}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginHorizontal: 24,
        marginBottom: 16,
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 38
    }
})