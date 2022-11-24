import React from "react";
import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {StyleSheet, View, Text} from "react-native";


const ReturnPolicy = () => {
    return (
        <View style={styles.container}>
            <Text>Hi, i am ReturnPolicy </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default ReturnPolicy;