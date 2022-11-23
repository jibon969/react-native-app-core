import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView
} from 'react-native';

import TermsCondition from '../../src/components/TermsCondition/TermsCondition'

const TermsConditionScreens = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TermsCondition/>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
export default TermsConditionScreens;