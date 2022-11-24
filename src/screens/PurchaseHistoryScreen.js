import React, {useEffect, useState, useContext} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Platform,
} from 'react-native';

import {FontAwesome} from '@expo/vector-icons';
import PurchaseHistory from '../components/PurchaseHistory/PurchaseHistory';

const PurchaseHistoryScreen = () => {
        return (
            <View style={styles.container}>
                <View style={styles.purchaseHistoryContainer}>
                    <ScrollView>
                        <PurchaseHistory/>
                    </ScrollView>
                </View>
            </View>
        )

        // return (
        //     <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
        //         <FontAwesome name="shopping-cart" size={150} color="#293352"/>
        //         <Text style={styles.purchaseEmptyTitle}>You didn't purchase any product yet !</Text>
        //         <TouchableOpacity onPress={() => navigation.navigate("HomeStack")}>
        //             <Text style={styles.purchaseNoDataFound}>Click here to continue shopping</Text>
        //         </TouchableOpacity>
        //     </View>
        // )

    }
;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    purchaseHistoryContainer: {
        flex: 1,
        ...Platform.select({
            ios: {
                marginBottom: "0%"
            },
            android: {
                marginBottom: 0
            }
        }),
    },

    purchaseEmptyTitle: {
        fontWeight: "bold"
    },
    purchaseNoDataFound: {
        marginTop: 10,
        padding: 7,
        backgroundColor: "#F9C65D",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#F9C65D",
        color: "#0C0C0C",
        overflow: "hidden"
    }


});

export default PurchaseHistoryScreen;