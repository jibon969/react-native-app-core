import {SafeAreaView, View, StyleSheet, Platform, ScrollView, Text} from 'react-native';

const CategoryScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.container}>
                <ScrollView>
                    {/* Category By Makeup */}
                    <View style={styles.byMakeup}>
                        <Text>Hi, Makeup</Text>
                    </View>
                    {/* Category By Skin */}
                    <View style={styles.bySkin}>
                        <Text>Hi, Skin</Text>
                    </View>
                    {/* Category By Concern */}
                    <View style={styles.byConcern}>
                        <Text>Hi, Concern</Text>
                    </View>
                </ScrollView>
            </View>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        overflow: 'hidden',
    },
    container: {
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
    byMakeup: {
        overflow: "hidden",
        padding: 1,
        marginTop: 10
    },

    bySkin: {
        overflow: "hidden",
        marginTop: 10
    },
    byConcern: {
        overflow: "hidden",
        padding: 4,
        marginTop: 10
    }
});


export default CategoryScreen;