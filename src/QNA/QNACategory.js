import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {COLORS,icons,images,SIZES} from '../Jobs/constants';

const QNACategory = () => {

    const navigation = useNavigation();


  return (
    <View style={styles.container}>
        <View style={styles.categoryContainer}>
            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('qnahome',{Question_category: 'java'})}
            >
                <Text style={styles.categoryTitle}>Java</Text>
            </TouchableOpacity>

            
            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('qnahome',{Question_category: 'cpp'})}
            >
                <Text style={styles.categoryTitle}>C++</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('qnahome',{Question_category: 'dbms'})}
            >
                <Text style={styles.categoryTitle}>DBMS</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('qnahome',{Question_category: 'oops'})}
            >
                <Text style={styles.categoryTitle}>OOPs</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('qnahome',{Question_category: 'cn'})}
            >
                <Text style={styles.categoryTitle}>Computer Network</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.category}
            onPress={() => navigation.navigate('qnahome',{Question_category: 'os'})}
            >
                <Text style={styles.categoryTitle}>Operating System</Text>
            </TouchableOpacity>


        </View>
    </View>
  )
}

export default QNACategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
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
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'darkred',
        fontWeight: '500'
    }

})