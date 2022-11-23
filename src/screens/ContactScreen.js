import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Contact from '../components/Contact/Contact'


const ContactScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Contact/>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default ContactScreen;