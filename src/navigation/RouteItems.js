import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {FontAwesome} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';


export const screens = {
    HomeTab: 'HomeTab',
    HomeStack: 'HomeStack',
    Home: 'Home',

    ContactStack: 'ContactStack',
    Contact: 'Contact',

    UserProfileStack: 'UserProfileStack',
    UserProfile: 'UserProfile',

    AboutStack: 'AboutStack',
    About: 'About',

    TermsConditionStack: 'TermsConditionStack',
    TermsCondition: 'TermsCondition',

    SecurityPrivacyStack: 'SecurityPrivacyStack',
    SecurityPrivacy: 'SecurityPrivacy',

    ReturnPolicyStack: 'ReturnPolicyStack',
    ReturnPolicy: 'ReturnPolicyScreen',

    TrackingMyParcelStack: 'TrackingMyParcelStack',
    TrackingMyParcel: 'TrackingMyParcel',

    PurchaseHistoryStack: 'PurchaseHistoryStack',
    PurchaseHistory: 'PurchaseHistory',

    UserInformationStack: 'UserInformationStack',
    UserInformation: 'UserInformation',

    BrandStack: 'BrandStack',
    Brand: 'Brand',

    CallStack: 'CallStack',
    Call: 'Call',

    CategoryStack: 'CategoryStack',
    Category: 'Category',

    CartStack: 'CartStack',
    Cart: 'Cart',

    CheckoutStack: 'CheckoutStack',
    Checkout: 'Checkout',

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

    // Contact Stack ==========================
    {
        name: screens.ContactStack,
        focusedRoute: screens.ContactStack,
        title: 'Contact Us',
        showInTab: false,
        showInDrawer: false,
    },
    {
        name: screens.Contact,
        focusedRoute: screens.ContactStack,
        title: 'Contact Us',
        showInTab: false,
        showInDrawer: false
    },

    // UserProfile Stack ==========================
    {
        name: screens.UserProfileStack,
        focusedRoute: screens.UserProfileStack,
        title: 'User Profile',
        showInTab: false,
        showInDrawer: false
    },
    {
        name: screens.UserProfile,
        focusedRoute: screens.UserProfileStack,
        title: 'User Profile',
        showInTab: false,
        showInDrawer: false,
    },

    // About Stack==========================
    {
        name: screens.AboutStack,
        focusedRoute: screens.AboutStack,
        title: 'About',
        showInTab: false,
        showInDrawer: false
    },
    {
        name: screens.About,
        focusedRoute: screens.AboutStack,
        title: 'About',
        showInTab: false,
        showInDrawer: false
    },

    // TermsCondition Stack ==========================
    {
        name: screens.TermsConditionStack,
        focusedRoute: screens.TermsConditionStack,
        title: 'Terms Condition',
        showInTab: false,
        showInDrawer: false,
    },

    {
        name: screens.TermsCondition,
        focusedRoute: screens.TermsConditionStack,
        title: 'Terms Condition',
        showInTab: false,
        showInDrawer: false
    },

    // SecurityPrivacy Stack ==========================
    {
        name: screens.SecurityPrivacyStack,
        focusedRoute: screens.SecurityPrivacyStack,
        title: 'Security & Privacy',
        showInTab: false,
        showInDrawer: false,
    },

    {
        name: screens.SecurityPrivacy,
        focusedRoute: screens.SecurityPrivacyStack,
        title: 'Security & Privacy',
        showInTab: false,
        showInDrawer: false
    },

    // ReturnPolicy Stack ==========================
    {
        name: screens.ReturnPolicyStack,
        focusedRoute: screens.ReturnPolicyStack,
        title: 'Return Policy',
        showInTab: false,
        showInDrawer: false,
    },

    {
        name: screens.ReturnPolicy,
        focusedRoute: screens.ReturnPolicyStack,
        title: 'Return Policy',
        showInTab: false,
        showInDrawer: false
    },

    // TrackingMyParcel Stack ===================================
    {
        name: screens.TrackingMyParcelStack,
        focusedRoute: screens.TrackingMyParcelStack,
        title: 'Tracking My Parcel',
        showInTab: false,
        showInDrawer: false,
    },

    {
        name: screens.TrackingMyParcel,
        focusedRoute: screens.TrackingMyParcelStack,
        title: 'Tracking My Parcel',
        showInTab: false,
        showInDrawer: false
    },

    // PurchaseHistory Stack ===================================
    {
        name: screens.PurchaseHistoryStack,
        focusedRoute: screens.PurchaseHistoryStack,
        title: 'Purchase History',
        showInTab: false,
        showInDrawer: false,
    },

    {
        name: screens.PurchaseHistory,
        focusedRoute: screens.PurchaseHistoryStack,
        title: 'Purchase History',
        showInTab: false,
        showInDrawer: false
    },

    // UserInformation Stack ===================================
    {
        name: screens.UserInformationStack,
        focusedRoute: screens.UserInformationStack,
        title: 'User Information',
        showInTab: false,
        showInDrawer: false,
    },

    {
        name: screens.UserInformation,
        focusedRoute: screens.UserInformationStack,
        title: 'User Information',
        showInTab: false,
        showInDrawer: false
    },

    // Brand Stack ===================================
    {
        name: screens.BrandStack,
        focusedRoute: screens.BrandStack,
        title: 'Brands',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <Ionicons name="grid-sharp" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>,
    },
    {
        name: screens.Brand,
        focusedRoute: screens.BrandStack,
        title: 'Brands',
        showInTab: false,
        showInDrawer: false,

        icon: (focused) =>
            <Ionicons name="grid-sharp" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>,
    },


    // Call Stack ===================================
    {
        name: screens.CallStack,
        focusedRoute: screens.CallStack,
        title: 'Call Us',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.Call,
        focusedRoute: screens.CallStack,
        title: 'Call Us',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'}/>,
    },


    // Category Stack =========================
    {
        name: screens.CategoryStack,
        focusedRoute: screens.CategoryStack,
        title: 'Category',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <MaterialIcons name="grid-on" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>

    },
    {
        name: screens.Category,
        focusedRoute: screens.CategoryStack,
        title: 'Category',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <MaterialIcons name="grid-on" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>

    },


    // Cart Stack =========================
    {
        name: screens.CartStack,
        focusedRoute: screens.CartStack,
        title: 'Cart',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <MaterialIcons name="grid-on" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>

    },
    {
        name: screens.Cart,
        focusedRoute: screens.CartStack,
        title: 'Cart',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <MaterialIcons name="grid-on" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>

    },

    // Checkout Stack =========================
    {
        name: screens.CheckoutStack,
        focusedRoute: screens.CheckoutStack,
        title: 'Checkout',
        showInTab: false,
        showInDrawer: true,
        icon: (focused) =>
            <MaterialIcons name="grid-on" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>

    },
    {
        name: screens.Checkout,
        focusedRoute: screens.CheckoutStack,
        title: 'Checkout',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <MaterialIcons name="grid-on" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>

    },

];