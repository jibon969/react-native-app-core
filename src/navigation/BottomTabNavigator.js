import * as React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Text, StyleSheet, View} from 'react-native'
import {routes, screens} from './RouteItems'
import HomeStackNavigator from './stack-navigators/HomeStackNavigator'
import ContactStackNavigator from './stack-navigators/ContactStackNavigator'
import UserProfileStackNavigator from './stack-navigators/UserProfileStackNavigator'
import AboutStackNavigator from './stack-navigators/AboutStackNavigator'
import TermsConditionStackNavigator from './stack-navigators/TermsConditionStackNavigator'
import SecurityPrivacyStackNavigator from './stack-navigators/SecurityPrivacyStackNavigator'
import ReturnPolicyStackNavigator from './stack-navigators/ReturnPolicyStackNavigator'
import TrackingMyParcelStackNavigator from './stack-navigators/TrackingMyParcelStackNavigator'
import PurchaseHistoryStackNavigator from './stack-navigators/PurchaseHistoryStackNavigator'

const Tab = createBottomTabNavigator();

const tabOptions = ({route}) => {
    const item = routes.find(routeItem => routeItem.name === route.name); // get the route config object

    if (!item.showInTab) { // hide this tab
        return {
            tabBarButton: () => <View style={{width: 0}}/>,
            headerShown: false,
            tabBarStyle: styles.tabContainer,
            title: item.title,
        }
    }

    return {
        tabBarIcon: ({focused}) => item.icon(focused),
        tabBarLabel: () => (
            <Text style={styles.tabBarLabel}>{item.title || ''}</Text>
        ),
        headerShown: false,
        tabBarStyle: styles.tabContainer,
        title: item.title,
    }
};

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={tabOptions}>
            <Tab.Screen name={screens.HomeStack} component={HomeStackNavigator}/>
            <Tab.Screen name={screens.ContactStack} component={ContactStackNavigator}/>
            <Tab.Screen name={screens.UserProfileStack} component={UserProfileStackNavigator}/>
            <Tab.Screen name={screens.AboutStack} component={AboutStackNavigator}/>
            <Tab.Screen name={screens.TermsConditionStack} component={TermsConditionStackNavigator}/>
            <Tab.Screen name={screens.SecurityPrivacyStack} component={SecurityPrivacyStackNavigator}/>
            <Tab.Screen name={screens.TrackingMyParcelStack} component={TrackingMyParcelStackNavigator}/>
            <Tab.Screen name={screens.ReturnPolicyStack} component={ReturnPolicyStackNavigator}/>
            <Tab.Screen name={screens.PurchaseHistoryStack} component={PurchaseHistoryStackNavigator}/>
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
    tabBarLabel: {
        color: '#292929',
        fontSize: 12,
    },
    tabContainer: {
        height: 60,
    }
});

export default BottomTabNavigator