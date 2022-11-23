import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export const screens = {
    HomeTab: 'HomeTab',
    HomeStack: 'HomeStack',
    Home: 'Home',
    ContactStack: 'ContactStack',
    Contact: 'Contact',

    UserProfileStack: 'UserProfileStack',
    UserProfile: 'UserProfile',
};

export const routes = [
    {
        name: screens.HomeTab,
        focusedRoute: screens.HomeTab,
        title: 'Home',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="home" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.HomeStack,
        focusedRoute: screens.HomeStack,
        title: 'Home',
        showInTab: true,
        showInDrawer: true,
        icon: (focused) =>
            <Icon name="home" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.Home,
        focusedRoute: screens.HomeStack,
        title: 'Home',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="home" size={30} color={focused ? '#551E18' : '#000'}/>,
    },

    {
        name: screens.ContactStack,
        focusedRoute: screens.ContactStack,
        title: 'Contact Us',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.Contact,
        focusedRoute: screens.ContactStack,
        title: 'Contact Us',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'}/>,
    },

    // UserProfileStack ==========================
    {
        name: screens.UserProfileStack,
        focusedRoute: screens.UserProfileStack,
        title: 'User Profile',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.UserProfile,
        focusedRoute: screens.UserProfileStack,
        title: 'User Profile',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'}/>,
    },

];