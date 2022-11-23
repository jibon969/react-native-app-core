import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Platform
} from 'react-native'

const About = () => {
    return (
        <SafeAreaView style={styles.noDataContainer}>
            <Text style={styles.noDataTitle}>About Data</Text>
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    aboutUsContainer: {
        flex: 1,
    },
    aboutUs: {
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
    aboutUsMargin: {
        margin: 15
    },
    aboutUsTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
        overflow: "hidden",
    },
    aboutUsText: {
        textAlign: "justify",
        lineHeight: 24,
        marginBottom: 10,
    },

    noDataContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    noDataTitle: {
        fontWeight: "bold",
    }
});

export default About;
