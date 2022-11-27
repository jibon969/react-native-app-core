import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,} from 'react-native';

const Brand = () => {
    return (
        <View style={styles.container}>
            <View style={styles.brandCard}>
                <TouchableOpacity>
                    {/*<Image source={{uri: brand.image}} style={styles.brandCardImage}/>*/}
                    <Image source={require('../../assets/google.png')} style={styles.brandCardImage}/>
                    <Text style={styles.brandCardOfferTitle}>up to 60 %</Text>
                    <View style={styles.brandCardContent}>
                        <Text style={styles.brandCardTitle}>Nova 5t</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/*<View style={styles.noBrand}>*/}
            {/*<Text style={styles.searchValueTitle}>{searchValue}</Text>*/}
            {/*<Text>Sorry, No Brand Found</Text>*/}
            {/*</View>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    brandCard: {
        marginTop: 5,
        width: "30%",
        backgroundColor: "#FFF",
        borderRadius: 7,
        elevation: 4,
        shadowOffset: {
            width: 1, height: 1
        },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 5,
        marginVertical: 10,
    },
    brandCardImage: {
        width: "100%",
        height: 120,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        // backgroundColor:"orange"
    },
    brandCardOfferTitle: {
        position: 'absolute',
        color: "#FFF",
        backgroundColor: "red",
        padding: 2,
        borderRadius: 5,
        alignSelf: 'flex-end',
        fontSize: 12,
    },
    brandCardContent: {
        justifyCenter: "center",
        alignItems: "center",
        margin: 5,

    },
    brandCardTitle: {
        fontSize: 12,
    },
    noBrand: {
        flex: 1,
        margin: 10,
        alignItems: "center",

    },
    searchValueTitle: {
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 5,
    }
});

export default Brand;
