import { StyleSheet, Text, View , TouchableOpacity , FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import {firebase} from '../../firebase/FirebaseConfig'

const DSAQNA = ({route}) => {

    const [Question,setQuestions] = useState([]);

    const {difficulty} = route.params 

    useEffect(() => {
        getQuestions()
    },[])

    const getQuestions = async () => {
        setQuestions();

        const db = firebase.firestore();
        const questionsRef = db.collection('DsaQNA');
        const snapshot = await questionsRef.where('difficulty', '==',difficulty).get();

        if (snapshot.empty)
        {
            console.log('No Matching documents ')
            return ;
        }

        const allQuestions = snapshot.docs.map(doc => doc.data());
        setQuestions(allQuestions)
    };

   

  return (
    <View style={styles.container}>
        <FlatList
        data = {Question}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({item,index}) => (
            <View style={styles.questionContainer}>
                <Text style={styles.question}>
                    {index+1}. {item.title}
                </Text>
                
                <Text style={{color: 'firebrick'}}>
                    {item.Question}
                </Text>
                
                <Text style={styles.ans}>Ans :</Text>

                <Text style={styles.answer}>
                    {item.answer}
                </Text>

            </View>
        )}
        />

        
    </View>
  )
}

export default DSAQNA

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 50
    },

    questionContainer: {
        backgroundColor: 'ghostwhite',
        borderRadius: 10,
        width: 400,
        marginBottom: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    
    question: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 10,
        color: 'red'
    },
    
    answer: {
        fontWeight: 400,
        marginLeft: 40,
        borderTopColor: 'black',
        borderWidth: 0.5,
        padding: 20,
        lineHeight: 25,
        backgroundColor: 'snow',
        letterSpacing: 1
    },

    ans: {
        marginTop: 40,
        marginBottom: 10,
        color: 'red'
    }


})