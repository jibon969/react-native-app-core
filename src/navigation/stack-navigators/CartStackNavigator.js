import React from 'react'
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import CartScreen from "../../screens/CartScreen";

const Stack = createStackNavigator();

const CartStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={({navigation, route}) => ({
            headerShown: true,
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: '#183153',
                height: 50
            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('UserProfileStack')} style={styles.headerLeft}>
                    <Ionicons name="arrow-back-outline" size={25} color="#fff" style={{padding: 5}}/>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={styles.headerRight}>
                    <View style={styles.headerContent}>
                        <Text style={styles.headerSearchIcon}>
                            <FontAwesome name="search" size={20} color="#fff"/>
                        </Text>
                        <Text style={styles.headerSearchIcon}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={styles.touchableButton}>
                                <FontAwesome name="user" size={20} color="#fff"/>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            ),
        })}>
            <Stack.Screen name="Cart" component={CartScreen}/>
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    headerLeft: {
        marginLeft: 10,
    },
    // User Icon & Search
    headerRight: {
        marginRight: 15,
    },
    headerContent: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    headerSearchIcon: {
        marginLeft: 20,
    },
    headerUserIcon: {
        marginLeft: 20
    },
    touchableButton: {
        backgroundColor: "#183153",
        overflow: "hidden",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 3,
        padding: 3,
        borderRadius: 50
    },
    headerImage: {
        ...Platform.select({
            ios: {
                width: 150,
                height: 20,
            },
            android: {
                width: 150,
                height: 20,
            }
        })
    },

});


export default CartStackNavigator