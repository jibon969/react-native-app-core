import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {FontAwesome} from '@expo/vector-icons';


const PurchaseHistory = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <View style={styles.cartInvoice}>
                    <TouchableOpacity>
                        <Text style={{marginTop: 2}}>
                            <FontAwesome name="file-pdf-o" size={60} color="black"/>
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <Text style={{marginTop: 10, textAlign: "center"}}>Invoice No : </Text>
                </View>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        marginTop: 5,
        marginLeft: 7,
        marginRight: 7
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
        marginVertical: 5,
        marginHorizontal: 5

    },
    cartInvoice: {
        justifyContent: "center",
        alignItems: "center",
        padding: 4
    },

    cardContent: {
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        marginBottom: 2
    },

    cardContentMain: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    cardLeftContent: {
        width: "40%",
    },
    cardLeftTitleContent: {
        fontWeight: "bold",
    },
    cardRightContent: {
        width: "60%",
    },


});

export default PurchaseHistory;