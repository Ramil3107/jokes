import { StyleSheet, Text, View } from "react-native"

export const ScreenTitle = ({ title }) => {
    return (
        <>
            <View>
                <Text style={styles.headline}>
                    {title}
                </Text>
            </View>

            <View style={styles.divider} />
        </>
    )
}

const styles = StyleSheet.create({
    headline: {
        fontFamily:"Inter",
        fontSize: 36,
        fontWeight: "700",
        marginTop: 73,
        marginLeft: 24,
        marginBottom: 24
    },
    divider: {
        borderBottomColor: "#E6E6E6",
        borderBottomWidth: 1
    }
})