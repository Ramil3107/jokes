import { StyleSheet, Text, View } from "react-native"
import { Like } from "../../../common/components/Like"

export const ListItem = ({ text, isFavourite, handleIsFavourite }) => {
    return (
        <View>
            <View style={styles.wrapper}>
                <Text style={styles.text}>
                    {text}
                </Text>

                <Like
                    handlePress={handleIsFavourite}
                    active={isFavourite}
                    width={48}
                    height={48}
                    iconHeight={28}
                    iconWidth={28}
                />
            </View>
            <View style={styles.divider} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        marginVertical: 24,
        marginLeft: 24
    },
    text: {
        fontFamily: "Inter",
        width: 259,
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 26
    },
    divider: {
        borderBottomColor: "#E6E6E6",
        borderBottomWidth: 1
    }
})