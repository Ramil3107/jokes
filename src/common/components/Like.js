import { StyleSheet, TouchableOpacity } from "react-native"
import FavouriteIconSvg from '../../assets/icons/FavouriteIconSvg';

export const Like = ({ handlePress, active, height, width, iconWidth, iconHeight }) => {

    const styles = StyleSheet.create({
        main: {
            justifyContent: "center",
            alignItems: "center",
            height: height,
            width: width,
            borderRadius: 100,
            marginLeft: 24
        }
    })

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{ ...styles.main, backgroundColor: active ? "#9763FF" : "#EAE0FF" }}
        >
            <FavouriteIconSvg
                width={iconWidth}
                height={iconHeight}
                stroke={active ? "white" : "#9763FF"}
                fill={active ? "white" : "none"}
            />
        </TouchableOpacity>)
}

