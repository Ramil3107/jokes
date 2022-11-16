import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Today } from './screens/Today';
import { History } from './screens/History';

const Tab = createBottomTabNavigator();

export const Stack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: { height: 102, borderTopWidth: 1 },
                    tabBarActiveTintColor: "#9763FF",
                    tabBarInactiveTintColor: "#C1C3C6"
                })}
                sceneContainerStyle={{ backgroundColor: 'white', borderTopColor: "#E6E6E6" }}
            >
                <Tab.Screen
                    name="Today"
                    component={Today}
                    options={{
                        headerShown: false,
                    }} />
                <Tab.Screen name="History" component={History} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
