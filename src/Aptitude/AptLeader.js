import { StyleSheet, Text, View , TouchableOpacity , FlatList, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import {colors, titles, btn1, hr80} from '../globals/style';
import {firebase} from '../../firebase/FirebaseConfig'
import { useNavigation } from '@react-navigation/native'


const AptLeader = () => {

    const [Question,setQuestions] = useState([]);


    const getQuestions = async () => {
        setQuestions();

        const db = firebase.firestore().collection('AptitudeResults').orderBy('score','desc');

        try {
            const snapshot = await db.get();
            const data = snapshot.docs.map(doc => doc.data());
            // console.log(data);
            setQuestions(data);
        }catch (error)
        {
            console.log(error);
            alert("Something went wrong !")
        }
      };
    
      useEffect(() => {
        getQuestions()
      },[])

      
      
      return (
        <View style={styles.container}>
          {/* Table Header */}
          <View style={styles.row}>
            <Text style={styles.header}>Rank</Text>
            <Text style={styles.header}>Name</Text>
            <Text style={styles.header}>Score</Text>
          </View>
    
          {/* Table Body */}
          <FlatList
        data = {Question}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({item,index}) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{index+1}</Text>
              <Text style={styles.cell}>{item.name}</Text>
              <Text style={styles.cell}>{item.score}</Text>
            </View>)}
        />

        </View>
  )
}

export default AptLeader

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      // marginTop: 50
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 8,
      borderColor: 'firebrick',
      borderWidth: 1,
    },
    header: {
      fontWeight: 'bold',
      flex: 1,
      textAlign: 'center',
      fontSize: 20,
      color: 'firebrick',
    //   borderColor: 'firebrick',
    //   borderWidth: 1,
      padding: 10
    },
    cell: {
      flex: 1,
      textAlign: 'center',
      fontSize: 15,
      textTransform: 'capitalize'
    },
  });
  