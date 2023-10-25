import { StyleSheet, Text, View , TouchableOpacity , FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import {firebase} from '../../firebase/FirebaseConfig'
import { useNavigation } from '@react-navigation/native'
import Loader from '../Loader';

const AptContest = () => {

    const [loading,setLoading] = useState(false);
    const navigation = useNavigation();

    const [Question,setQuestions] = useState([]);
    const [selectedOptions,setSelectedOptions] = useState({});
    const [score,setScore] = useState(0);
    const [showResults,setShowResults] = useState(false);
    const [userExists,setUserExists] = useState("");
    const [attempt,setAttempt] = useState(0);


  const getQuestions = async() => {
    setLoading(true);
    setSelectedOptions({});
    setQuestions();
    setShowResults(false);

    const db = firebase.firestore().collection('AptitudeContest');


    try {
        const snapshot = await db.get();
        const data = snapshot.docs.map(doc => doc.data());
        // console.log(data);
        setLoading(false);
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


    const handleOptionSelect = (questionIndex,option) => {
        setSelectedOptions({
            ...selectedOptions,
            [questionIndex]: option,

        });
    };

    

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

        let correctAnswers = 0;
        Question.forEach((question,index) => {
            if (selectedOptions[index] === question.correctOption)
            {
                correctAnswers++ ;
            }
        });

        setScore(correctAnswers);
        setShowResults(true);

        const docRef = firebase.firestore().collection('AptitudeResults').doc(new Date().getTime().toString());

        
        docRef.set({
            id: docRef.id,
            name: userdata.name,
            userid: userloggeduid,
            score: correctAnswers,
            Time : new Date().toLocaleString(),
            attempt: 1
        }).then(() => {
                alert('Contest Submitted')
                navigation.navigate('aptitude')
            })
        }

        
        const userAttempt = async () => {
            const docRef = firebase.firestore().collection('AptitudeResults').where('userid', '==', userloggeduid)
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
                     {index+1}. {item.Question}
                 </Text>
 
                 <TouchableOpacity 
                 
                 style={[
                     styles.option,
                     selectedOptions[index] === 1 && styles.selectedOptions,
                     showResults && item.correctOption === 1 && styles.correctOption,
                     showResults && selectedOptions[index] === 1 && selectedOptions[index] !== item.correctOption && styles.wrongOption ,
                 ]}
                 onPress={() => handleOptionSelect(index,1)}
                 disabled={showResults}
                 >
 
                     <Text>a. {item.option1}</Text>
                 </TouchableOpacity>
 
                 
                 <TouchableOpacity 
                 
                 style={[
                     styles.option,
                     selectedOptions[index] === 2 && styles.selectedOptions,
                     showResults && item.correctOption === 2 && styles.correctOption,
                     showResults && selectedOptions[index] === 2 && selectedOptions[index] !== item.correctOption && styles.wrongOption ,
                 ]}
                 onPress={() => handleOptionSelect(index,2)}
                 disabled={showResults}
                 >
 
                     <Text>b. {item.option2}</Text>
                 </TouchableOpacity>
 
                 <TouchableOpacity 
                 
                 style={[
                     styles.option,
                     selectedOptions[index] === 3 && styles.selectedOptions,
                     showResults && item.correctOption === 3 && styles.correctOption,
                     showResults && selectedOptions[index] === 3 && selectedOptions[index] !== item.correctOption && styles.wrongOption ,
                 ]}
                 onPress={() => handleOptionSelect(index,3)}
                 disabled={showResults}
                 >
 
                     <Text>c. {item.option3}</Text>
                 </TouchableOpacity>
 
                 <TouchableOpacity 
                 
                 style={[
                     styles.option,
                     selectedOptions[index] === 4 && styles.selectedOptions,
                     showResults && item.correctOption === 4 && styles.correctOption,
                     showResults && selectedOptions[index] === 4 && selectedOptions[index] !== item.correctOption && styles.wrongOption ,
                 ]}
                 onPress={() => handleOptionSelect(index,4)}
                 disabled={showResults}
                 >
 
                     <Text>d. {item.option4}</Text>
                 </TouchableOpacity>
 
                 
 
 
             </View>
         )}
         />
        
     }  
    
    
    <View>
    { userExists.attempt === 1 ? 

<TouchableOpacity
style={styles.submitButton}
disabled={showResults}
>

    <Text style={styles.submitButtonText} onPress={() => navigation.navigate('aptitude')}>Go Back</Text>

</TouchableOpacity>

         :
            <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            disabled={showResults}
            >
    
                <Text style={styles.submitButtonText}>Submit</Text>
    
            </TouchableOpacity>

}
</View>
            
            {showResults &&  (
                        <View style={styles.result}>
                            <Text style={styles.resultText}>You Scored {score} out of {Question.length}</Text>
                        
                        </View>
                    )}
           

        </View>
      )
}

export default AptContest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 50
    },

    questionContainer: {
        backgroundColor: 'snow',
        borderRadius: 10,
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
        width: 400
    },

    question: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 10,
        color: 'red',
    },
    
    option: {
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 10
    },

    selectedOptions: {
        backgroundColor: 'skyblue',
    },

    correctOption: {
        backgroundColor: 'lightgreen'
    },

    wrongOption: {
        backgroundColor: 'red',
    },

    submitButton: {
        backgroundColor: 'blue',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },

    submitButtonText: {
        color: '#fff',
        fontSize: 20,
    },

    result: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },

    tryAgainButton: {
        backgroundColor: 'blue',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },

    tryAgainButtontext: {
        color: '#fff',
        fontSize: 20,
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