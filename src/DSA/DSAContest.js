import { StyleSheet, Text, View , TouchableOpacity , FlatList, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import {colors, titles, btn1, hr80} from '../globals/style';
import {firebase} from '../../firebase/FirebaseConfig'
import { useNavigation } from '@react-navigation/native'


const DSAContest = () => {

    const navigation = useNavigation();

  const [Question,setQuestions] = useState([]);
  const [answer,setAnswer] = useState('')
  const [userExists,setUserExists] = useState("");
  const [attempt,setAttempt] = useState(0);

    useEffect(() => {
        getQuestions()
    },[])

    const getQuestions = async () => {
        setQuestions();

        const db = firebase.firestore().collection('DSAContest');


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

      
    const [userloggeduid, setUserloggeduid] = useState(null);
    const [userdata, setUserdata] = useState(null);

    useEffect(() => {
        const checklogin = () => {
            firebase.auth().onAuthStateChanged((user) => {
                // console.log(user);
                if (user) {
                    // navigation.navigate('home');
                    setUserloggeduid(user.uid);
                } else {
                    // No user is signed in.
                    console.log('no user');
                }
            });
        }
        checklogin();
    }, [])

    // console.log(userloggeduid);
    // console.log(userdata)

    const getuserdata = async () => {
        const docRef = firebase.firestore().collection('UserData').where('uid', '==', userloggeduid)
        const doc = await docRef.get();
        if (!doc.empty) {
            doc.forEach((doc) => {
                setUserdata(doc.data());
            })
        }
        else {
            console.log('no user data');
        }
    }

    useEffect(() => {

        getuserdata();
    }, [userloggeduid]);

    const handleSubmit = () => {
        const docRef = firebase.firestore().collection('DSAResults').doc(new Date().getTime().toString());

        docRef.set({
            id: docRef.id,
            name: userdata.name,
            userid: userloggeduid,
            answer: answer,
            Time : new Date().toLocaleString(),
            attempt: 1
        }).then(() => {
            alert('Contest Submitted')
            navigation.navigate('dsa')
        })
    }


    const userAttempt = async () => {
        const docRef = firebase.firestore().collection('DSAResults').where('userid', '==', userloggeduid)
        const doc = await docRef.get();
        if (!doc.empty) {
            doc.forEach((doc) => {
                setUserExists(doc.data());
                console.log(userExists.attempt)
            })
        }
        else {
            console.log('no user data');
        }

    }

    useEffect(() => {

        userAttempt();
    }, [userloggeduid]);


   

  return (
    <View style={styles.container}>
        { userExists.attempt === 1 ? <Text style={styles.attempt}>Already Attempted !</Text>
         :

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

            </View>
        )}
        />

}

{ userExists.attempt === 1 ? <Text></Text>
         :
                <TextInput 
                style={styles.answer}
                onChangeText={(text) => setAnswer(text)}
                multiline={true}
                />
}  


    { userExists.attempt === 1 ? 

<TouchableOpacity style={btn1} 
    onPress={() => navigation.navigate('home')}
>
      <Text
      
        style={{
          color: colors.col1,
          fontSize: titles.btntxt,
          fontWeight: "bold",
        }}
      >
        Go Back
      </Text>
    </TouchableOpacity>

         :

<TouchableOpacity style={btn1} onPress={() => handleSubmit()}>
      <Text
        style={{
          color: colors.col1,
          fontSize: titles.btntxt,
          fontWeight: "bold",
        }}
      >
        Submit
      </Text>
    </TouchableOpacity>

}




    </View>
  )
}

export default DSAContest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 50
    },

    questionContainer: {
        backgroundColor: 'white',
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
        borderColor: 'black',
        borderWidth: 0.5,
        height: 300,
        width : '90%',
        padding: 20,
        top: -100
    },

    attempt: {
        fontSize: 50,
        textAlign: 'center',
        borderColor: 'aqua',
        borderWidth: 1,
        padding: 50,
        borderRadius: 20,
        backgroundColor: 'lightcyan',
        color: 'purple',
        fontWeight: '300'
    }


})