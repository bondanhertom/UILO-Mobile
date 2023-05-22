

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Product from './screens/product';

const Stack = createNativeStackNavigator()
export default function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={Home} />
                <Stack.Screen name={"Product"} component={Product} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
