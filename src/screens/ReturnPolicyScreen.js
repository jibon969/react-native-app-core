import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import ReturnPolicy from '../components/ReturnPolicy/ReturnPolicy';

const ReturnPolicyScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ReturnPolicy/>
            </View>
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
export default ReturnPolicyScreen;