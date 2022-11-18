import { StyleSheet, Text, View } from "react-native"

export const EmptyState = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>
                The list of favourite jokes is currently empty...
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "black",
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 26
    }
})