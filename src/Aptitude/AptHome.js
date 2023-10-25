import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AptHome = () => {

    const navigation = useNavigation();


  return (
    <View style={styles.container}>
        <View style={styles.categoryContainer}>
            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate("aptcategory")}
            >
                <Text style={styles.categoryTitle}>Quiz</Text>
            </TouchableOpacity>

            
            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate("aptcontest")}
            >
                <Text style={styles.categoryTitle}>Contest</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate("aptleaderboard")}
            >
                <Text style={styles.categoryTitle}>Leaderboard</Text>
            </TouchableOpacity>

           
        </View>
    </View>
  )
}

export default AptHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 50
    },

    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
    },

    category: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'snow',
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    categoryTitle: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        color: 'darkred',
    }

})