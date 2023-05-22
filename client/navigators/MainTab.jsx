import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import {
    Ionicons,
    AntDesign,
    MaterialCommunityIcons,
    Entypo,
} from "@expo/vector-icons";


import Home from "../screens/home";
import Products from "../screens/product";
import SignIn from "../screens/signIn";
import More from "../screens/more";
import Favourite from "../screens/favourite";


const Tab = createBottomTabNavigator()
export default function MainTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: [
                    {
                        display: "flex"
                    },
                    null
                ]
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={[styles.image, { tintColor: color }]}
                            source={require("../assets/logo.png")}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={SignIn}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Wish List"
                component={Favourite}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name={"heart"} color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name="Products"
                component={Products}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name={"shopping"}
                            color={color}
                            size={20}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="More"
                component={More}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="dots-three-horizontal" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )

}
const styles = StyleSheet.create({
    image: { width: 44, height: 21 },
});