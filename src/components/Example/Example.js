import React from "react";
import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {StyleSheet, View, Text} from "react-native";


const Example = () => {
    return (
        <View style={styles.container}>
            <Text>Hi, i am components </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default Example;