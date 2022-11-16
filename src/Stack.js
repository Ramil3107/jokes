import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Today } from './screens/Today';
import { History } from './screens/History';
import TodayIconSvg from './assets/icons/TodayIconSvg';
import HistoryIconSvg from './assets/icons/HistoryIconSvg';


const Tab = createBottomTabNavigator();

export const Stack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { height: 102, borderTopWidth: 1, paddingHorizontal: 100, paddingBottom: 40 },
                    tabBarIconStyle: { marginBottom: -10 },
                    tabBarActiveTintColor: "#9763FF",
                    tabBarInactiveTintColor: "#C1C3C6",
                    headerShown: false,
                    tabBarLabelStyle: { fontSize: 12, fontWeight: "600" }
                }}
                sceneContainerStyle={{ backgroundColor: 'white', borderTopColor: "#E6E6E6" }}
            >
                <Tab.Screen
                    name="Today"
                    component={Today}
                    options={{
                        tabBarIcon: ({ color }) => <TodayIconSvg width={28} height={28} stroke={color} />
                    }} />
                <Tab.Screen
                    name="History"
                    component={History}
                    options={{
                        tabBarIcon: ({ color }) => <HistoryIconSvg width={28} height={28} stroke={color} />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
