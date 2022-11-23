import React from "react";
import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {StyleSheet, View, Text, ScrollView} from "react-native";


const SecurityPrivacy = () => {

    return (
        <View style={styles.securityPrivacy}>
            <ScrollView>
                <View style={styles.securityPrivacyMargin}>
                    <Text>Hello</Text>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    securityPrivacy: {
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
    securityPrivacyMargin: {
        margin: 15
    },
    securityPrivacyTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
        overflow: "hidden"
    },
    securityPrivacySubTitle: {
        fontWeight: "bold",
        marginBottom: 10,
        lineHeight: 20
    },
    securityPrivacyText: {
        textAlign: "justify",
        lineHeight: 24,
        marginBottom: 10
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

export default SecurityPrivacy;