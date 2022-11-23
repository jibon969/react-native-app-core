import * as React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome'
import {FontAwesome} from '@expo/vector-icons';

import BottomTabNavigator from './BottomTabNavigator'
import {routes, screens} from './RouteItems'

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    const currentRouteName = props.nav()?.getCurrentRoute()?.name;
    return (
        <DrawerContentScrollView {...props}>
            {
                routes.filter(route => route.showInDrawer).map((route) => {
                    const focusedRoute = routes.find(r => r.name === currentRouteName);
                    const focused = focusedRoute ?
                        route.name === focusedRoute?.focusedRoute :
                        route.name === screens.HomeStack;
                    return (
                        <DrawerItem
                            key={route.name}
                            label={() => (
                                <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
                                    {route.title}
                                </Text>
                            )}
                            onPress={() => props.navigation.navigate(route.name)}
                            style={[styles.drawerItem, focused ? styles.drawerItemFocused : null]}
                        />
                    )
                })
            }
        </DrawerContentScrollView>
    )
};

const DrawerNavigator = ({nav}) => {
    return (
        <Drawer.Navigator
            screenOptions={({navigation}) => ({
                headerStyle: {
                    backgroundColor: '#551E18',
                    height: 50,
                },
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
                        <Icon name="bars" size={26} color="#fff"/>
                    </TouchableOpacity>
                ),
            })}
            drawerContent={(props) => <CustomDrawerContent {...props} nav={nav}/>}>


            <Drawer.Screen name={screens.HomeTab} component={BottomTabNavigator} options={({navigation}) => ({
                title: 'Home',
                headerTitle: () =>
                    <View>
                        <Text style={{fontSize: 20, color: "#fff", marginLeft: 50}}>Application</Text>
                    </View>,
                headerRight: () => (
                    <View style={styles.headerRight}>
                        {/*Search Icon*/}
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity>
                                <FontAwesome name="search" size={20} color="#fff" style={{margin: 10}}/>
                            </TouchableOpacity>
                            {/*User Profile Icon*/}
                            <TouchableOpacity onPress={() => navigation.navigate('UserProfileStack')}>
                                <FontAwesome name="user" size={20} color="#fff" style={{margin: 10}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                ),
                headerShown: true
            })}/>
        </Drawer.Navigator>
    )
};

const styles = StyleSheet.create({
    headerLeft: {
        marginLeft: 15,
        borderRadius: 50,
        elevation: 20,
        padding: 10
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    headerRight: {
        marginRight: 15,
    },
    // drawer content
    drawerLabel: {
        fontSize: 14,
    },
    drawerLabelFocused: {
        fontSize: 14,
        color: '#551E18',
        fontWeight: '500',
    },
    drawerItem: {
        height: 50,
        justifyContent: 'center'
    },
    drawerItemFocused: {
        backgroundColor: '#ba9490',
    },
});

export default DrawerNavigator