import AsyncStorage from "@react-native-community/async-storage";
import { useEffect, useState } from "react";

export function useAsyncStorage() {

    async function getItem(key) {
        try {
            const item = await AsyncStorage.getItem(key)
            return item
        } catch (error) {
            console.log(error)
        }
    }

    async function setItem(key, value) {
        try {
            const item = await AsyncStorage.setItem(key, value)
        } catch (error) {
            console.log(error)
        }
    }

    async function removeItem(key) {
        try {
            const item = await AsyncStorage.removeItem(key)
        } catch (error) {
            console.log(error)
        }
    }

    return { getItem, setItem, removeItem }
}