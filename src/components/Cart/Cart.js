import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import {FontAwesome} from '@expo/vector-icons';


const Cart = () => {
    return (
        <View style={styles.mainContent}>
            <View style={styles.cartImageWrap}>
                {/*<Image source={{uri: item.product.image}} style={styles.cartImage}/>*/}
            </View>
            <View style={styles.cartContent}>
                <Text style={styles.cartTitle}>
                    Item one
                </Text>
                <View style={styles.cartQuantity}>
                    <View style={styles.cartQuantityPrice}>
                        <Text style={styles.cartPrice}>
                            ৳ : 10 x 2 = 20
                        </Text>
                    </View>
                    <View style={styles.addRemoveQuantity}>
                        <View style={styles.removeIconWrap}>
                            <View style={styles.removeIcon}>
                                <TouchableOpacity>
                                    <FontAwesome name="trash" size={20} style={{color: "#757070"}}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.plusMinusContent}>
                                {/*Plus Button*/}
                                <View>
                                    <TouchableOpacity>
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                </View>
                                {/*Quantity*/}
                                <Text style={styles.quantityButton}>1</Text>
                                <View pointerEvents="none">
                                    <TouchableOpacity>
                                        <Text style={styles.minusButtonDis}>+</Text>
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <TouchableOpacity>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        borderBottomWidth: 1,
        borderColor: "#ccccca",
        paddingBottom: 5,
        margin: 5
    },
    cartImageWrap: {
        width: "14%",
        marginRight: 2
    },
    cartImage: {
        width: "100%",
        height: 60,
        borderRadius: 5
    },
    cartContent: {
        width: "85%"
    },
    cartTitle: {
        fontSize: 12,
        marginLeft: 8,
        marginRight: 15,
        height: 30
    },
    cartQuantity: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    cartQuantityPrice: {
        width: "50%"
    },
    cartPrice: {
        textAlign: "left",
        margin: 3,
        fontSize: 12,
        marginTop: 10,
        marginLeft: 8
    },
    addRemoveQuantity: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    removeIconWrap: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    removeIcon: {
        fontSize: 14,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 2,
    },
    plusMinusContent: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    plusButton: {
        marginTop: 2,
        backgroundColor: "#ccccca",
        color: "black",
        width: 30,
        textAlign: "center",
        fontWeight: "bold",
        borderRadius: 5,
        padding: 3,
        overflow: "hidden"
    },
    plusButtonDis: {
        marginTop: 2,
        backgroundColor: "#ccccca",
        color: "black",
        width: 30,
        textAlign: "center",
        fontWeight: "bold",
        borderRadius: 5,
        padding: 3,
        opacity: 0.5,
        overflow: "hidden"
    },
    quantityButton: {
        marginTop: 2,
        color: "black",
        width: 30,
        textAlign: "center",
        fontWeight: "bold",
        padding: 3,
    },
    minusButton: {
        marginTop: 2,
        backgroundColor: "#ccccca",
        color: "black",
        width: 30,
        textAlign: "center",
        fontWeight: "bold",
        borderRadius: 5,
        padding: 3,
        overflow: "hidden"
    },
    minusButtonDis: {
        marginTop: 2,
        backgroundColor: "#ccccca",
        color: "black",
        width: 30,
        textAlign: "center",
        fontWeight: "bold",
        borderRadius: 5,
        padding: 3,
        opacity: 0.5,
    }
});
export default Cart;