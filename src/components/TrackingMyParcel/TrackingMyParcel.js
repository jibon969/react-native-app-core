import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons';


const TrackingMyParcel = () => {
    return (
        <View style={styles.trackingParcelContainer}>
            <View style={styles.cardContainer}>
                <View style={styles.cardWrap}>
                    <View style={styles.card}>
                        <TouchableOpacity>
                            <View style={styles.noParcelFile}>
                                <FontAwesome name="file-pdf-o" size={80} color="black"/>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.cardContent}>
                            <Text style={styles.textStyle}>Invoice : </Text>
                            <Text style={styles.textStyle}>Phone Number : </Text>
                            <Text style={styles.textStyle}>
                                Delivery Status:
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    trackingParcelContainer: {
        margin: 10
    },
    cardContainer: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 10
    },
    cardWrap: {
        flex: 1,
        width: 100,
        margin: 1,
        padding: 2

    },
    card: {
        borderRadius: 6,
        elevation: 2,
        backgroundColor: "#FFF",
        shadowOffset: {
            width: 1, height: 1
        },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    cardImage: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    cardImageStyle: {
        width: 100,
        height: 100,
    },
    trackParcelImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },

    cardContent: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10
    },
    cartTitle: {
        fontSize: 14,
        textAlign: "left"
    },
    textStyle: {
        marginBottom: 4,
        fontSize: 14,
        textAlign: "left",
    },

    noParcelFile: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    noParcel: {
        flex: 1,
        alignItems: "center",

    },
    noParcelTitle: {
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 5,
    }

});

export default TrackingMyParcel;