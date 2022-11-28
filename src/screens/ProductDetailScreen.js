import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    Platform,
    ScrollView,
    TouchableOpacity,
} from 'react-native'


const ProductDetailScreen = () => {
    return (
        <SafeAreaView style={styles.productDetailContainer}>
            <View style={styles.productDetailWrap}>
                <ScrollView>
                    <View style={styles.productDetailContent}>
                        <Text style={styles.productDetailMainTitle}>Hello</Text>
                        <View>
                            <Text style={styles.quantityButton}>6</Text>
                        </View>
                        <View style={{marginBottom: 10}}/>
                        <View style={{flexDirection: "row"}}>
                            <View style={{width: "75%", marginBottom: 20}}>
                                <View style={{flexDirection: "row"}}>
                                    <Text style={styles.productDetailHealthTips}>Health tips
                                        Hello
                                    </Text>
                                </View>
                            </View>
                            <View style={{width: "18%"}}>
                                <View style={{flex: 1}}>
                                    <View style={{flexDirection: "row"}}>
                                        <View>
                                            <TouchableOpacity>
                                                <Text>-</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity>
                                            <Text style={styles.quantityButton}>6</Text>
                                        </TouchableOpacity>
                                        <View>
                                            <TouchableOpacity>
                                                <Text>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={{width: "70%", marginTop: 10}}>
                                <View style={{flexDirection: "row"}}>
                                    <Text style={{fontWeight: "bold"}}>Price: ৳</Text>
                                    <Text style={styles.productDetailNewPrice}>77</Text>
                                    <Text style={styles.productDetailOldPrice}>70</Text>
                                </View>
                            </View>
                            <View style={{width: "30%"}}>
                                <TouchableOpacity>
                                    <Text style={styles.addToCartButton}>
                                        Buy Now
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.productDetailWeight}>Weight : 50 Ml</Text>
                        <Text style={{fontWeight: "bold", marginTop: 20}}>Description :</Text>
                        <Text style={styles.productDetailDescription}>
                            <Text style={{textAlign: 'justify', lineHeight: 25}}>
                                Hello
                            </Text>
                        </Text>
                    </View>
                    {/* Related Product */}
                    <View style={styles.relatedProduct}>
                        <Text style={styles.relatedProductTitle}>Hot Deals </Text>
                        <View style={styles.relatedProductContent}>
                            <Text style={{textAlign: 'justify', lineHeight: 25}}>Related Post</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    productDetailContainer: {
        flex: 1,
    },
    productDetailWrap: {
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
    productDetailTitleWrap: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    productDetailTitle: {
        fontSize: 22,
        fontWeight: "bold",
        borderBottomColor: "green",
        borderBottomWidth: 2,
        marginBottom: 5
    },
    /* Product Detail Content */
    productDetailContent: {
        margin: 10
    },
    productDetailImage: {
        width: "100%",
        height: 310,
        borderRadius: 7,
        marginBottom: 7,
    },
    productDetailMainTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "left",
    },
    productDetailDiscount: {
        fontWeight: "bold",
        marginTop: 2,
        marginBottom: 4
    },
    productDetailHealthTips: {
        fontWeight: "bold",
        marginTop: 2,
        marginBottom: 5
    },
    productDetailWeight: {
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 5
    },
    productDetailOldPrice: {
        color: "#E04F54",
        marginLeft: 10,
        fontWeight: "bold",
        textDecorationLine: 'line-through'
    },
    productDetailNewPrice: {
        fontWeight: "bold",
        marginLeft: 10
    },
    addToCartButton: {
        padding: 7,
        backgroundColor: "#F9C65D",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 8,
        fontWeight: "bold",
        borderColor: "#F9C65D",
        overflow: "hidden"
    },
    outOfStockButton: {
        padding: 1,
        backgroundColor: "#E04F54",
        color: "#FFF",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 5,
        fontWeight: "bold",
        borderColor: "#E04F54",
        overflow: "hidden",
        fontSize: 12,
        width: 90,

    },
    addToCartButtonDis: {
        padding: 7,
        backgroundColor: "#F9C65D",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 8,
        fontWeight: "bold",
        borderColor: "#F9C65D",
        opacity: 0.6,
        overflow: "hidden"
    },
    addToCart: {
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 7,
        // backgroundColor:"red"

    },
    plusButton: {
        padding: 8,
        backgroundColor: "#ccccca",
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        overflow: "hidden"
    },
    plusButtonDis: {
        padding: 8,
        backgroundColor: "#ccccca",
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        opacity: 0.6,
        overflow: "hidden",

    },
    quantityButton: {
        backgroundColor: "#E5E5E5",
        padding: 8,
        width: 35,
        textAlign: "center",
        fontWeight: "bold",
        overflow: "hidden"
    },
    minusButton: {
        padding: 8,
        backgroundColor: "#ccccca",
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        overflow: "hidden"
    },
    minusButtonDis: {
        padding: 8,
        backgroundColor: "#ccccca",
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        opacity: 0.6,
        overflow: "hidden",
    },
    productDetailDescription: {
        textAlign: "justify",
        margin: 5,
    },
    /* Related Product */
    relatedProduct: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    relatedProductTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        textAlign: "center"
    },
    relatedProductContent: {
        flex: 1,
        flexDirection: "row"
    },

    /* Comment & Replay */
    commentReplay: {
        marginBottom: 1
    },
    commentTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },


    // Related Slider
    pagination: {
        position: "absolute",
        bottom: 8,
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 2,
    },
    paginationDotActive: {backgroundColor: "#183153"},
    paginationDotInactive: {backgroundColor: "gray"},
    carousel: {flex: 1},

});

export default ProductDetailScreen;