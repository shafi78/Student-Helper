import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DSACategory = () => {

    const navigation = useNavigation();


  return (
    <View style={styles.container}>
        <View style={styles.categoryContainer}>
            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('DSAQNA',{difficulty: 'easy'})}
            >
                <Text style={styles.categoryTitle}>Easy</Text>
            </TouchableOpacity>

            
            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('DSAQNA',{difficulty: 'medium'})}
            >
                <Text style={styles.categoryTitle}>Medium</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('DSAQNA',{difficulty: 'hard'})}
            >
                <Text style={styles.categoryTitle}>Hard</Text>
            </TouchableOpacity>

            

        </View>
    </View>
  )
}

export default DSACategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 150
    },

    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
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