import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AptCategory = () => {

    const navigation = useNavigation();


  return (
    <View style={styles.container}>
        <View style={styles.categoryContainer}>
            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('AptQuiz',{Question_category: 'general'})}
            >
                <Text style={styles.categoryTitle}>General Aptitude</Text>
            </TouchableOpacity>

            
            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('AptQuiz',{Question_category: 'verbal'})}
            >
                <Text style={styles.categoryTitle}>Verbal and Reasoning</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('AptQuiz',{Question_category: 'current'})}
            >
                <Text style={styles.categoryTitle}>Current Affairs & GK</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('AptQuiz',{Question_category: 'engineering'})}
            >
                <Text style={styles.categoryTitle}>Engineering</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('AptQuiz',{Question_category: 'programming'})}
            >
                <Text style={styles.categoryTitle}>Programming</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('AptQuiz',{Question_category: 'technical'})}
            >
                <Text style={styles.categoryTitle}>Technical</Text>
            </TouchableOpacity>


        </View>
    </View>
  )
}

export default AptCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
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