import React from 'react';
import {StyleSheet, SafeAreaView,} from 'react-native'
import SecurityPrivacy from '../components/SecurityPrivacy/SecurityPrivacy';

const SecurityPrivacyScreen = () => {
    return (
        <SafeAreaView style={styles.securityPrivacyContainer}>
            <SecurityPrivacy/>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    securityPrivacyContainer: {
        flex: 1,
    },
});

export default SecurityPrivacyScreen;