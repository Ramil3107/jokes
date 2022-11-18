import AsyncStorage from "@react-native-community/async-storage";
import { Alert } from "react-native";

export function useAsyncStorage() {

    async function getItem(key) {
        try {
            const item = await AsyncStorage.getItem(key)
            const parsedItem = JSON.parse(item)
            return parsedItem
        } catch (error) {
            console.log(error)
            Alert.alert(error)
        }
    }

    async function setItem(key, value) {
        const stringifiedValue = JSON.stringify(value)
        try {
            const item = await AsyncStorage.setItem(key, stringifiedValue)
        } catch (error) {
            console.log(error)
            Alert.alert(error)
        }
    }

    async function removeItem(key) {
        try {
            const item = await AsyncStorage.removeItem(key)
        } catch (error) {
            console.log(error)
            Alert.alert(error)
        }
    }

    return { getItem, setItem, removeItem }
}