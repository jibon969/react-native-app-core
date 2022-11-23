import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import UserProfileScreen from "../../screens/UserProfileScreen";

const Stack = createStackNavigator();


const UserProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="UserProfile" component={UserProfileScreen}/>
        </Stack.Navigator>
    )
};

export default UserProfileStackNavigator