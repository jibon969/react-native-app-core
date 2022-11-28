import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';

const CheckoutScreen =({navigation}) =>{

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text>Checkout One</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                marginBottom: "0%"
            },
            android: {
                marginBottom: 0
            }
        })
    },


});
export default CheckoutScreen;