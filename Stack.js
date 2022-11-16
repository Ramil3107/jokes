import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Today } from './src/screens/Today';
import { History } from './src/screens/History';

const Tab = createBottomTabNavigator();

export const Stack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Today" component={Today} />
                <Tab.Screen name="History" component={History} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
