import { StyleSheet, TouchableOpacity } from "react-native"
import FavouriteIconSvg from '../../assets/icons/FavouriteIconSvg';

export const Like = ({ handlePress, active }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{ ...styles.main, backgroundColor: active ? "#9763FF" : "#EAE0FF" }}
        >
            <FavouriteIconSvg
                width={28}
                height={28}
                stroke={active ? "white" : "#9763FF"}
                fill={active ? "white" : "none"}
            />
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    main: {
        justifyContent: "center",
        alignItems: "center",
        height: 64,
        width: 64,
        borderRadius: 100,
        marginLeft: 24
    }
})