import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import About from '../../src/components/About/About'

const AboutScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <About/>
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
export default AboutScreen;