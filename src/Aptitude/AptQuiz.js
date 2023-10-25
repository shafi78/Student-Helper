import { StyleSheet, Text, View , TouchableOpacity , FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import {firebase} from '../../firebase/FirebaseConfig'
import Loader from '../Loader'

const AptQuiz = ({route}) => {

    const [loading,setLoading] = useState(false);
    const [Question,setQuestions] = useState([]);
    const [selectedOptions,setSelectedOptions] = useState({});
    const [score,setScore] = useState(0);
    const [showResults,setShowResults] = useState(false);

    const {Question_category} = route.params 

    useEffect(() => {
        getQuestions()
    },[])

    const getQuestions = async () => {
        setLoading(true);
        setSelectedOptions({});
        setQuestions();
        setShowResults(false);

        const db = firebase.firestore();
        const questionsRef = db.collection('AptitudeQuiz');
        const snapshot = await questionsRef.where('Question_category', '==',Question_category).get();

        if (snapshot.empty)
        {
            console.log('No Matching documents ')
            return ;
        }

        const allQuestions = snapshot.docs.map(doc => doc.data());
        const shuffleQuestions = allQuestions.sort(() => 0.5 - Math.random());
        setLoading(false);
        setQuestions(shuffleQuestions.slice(0,10));
        
    };

    const handleOptionSelect = (questionIndex,option) => {
        setSelectedOptions({
            ...selectedOptions,
            [questionIndex]: option,

        });
    };

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
    }

  return (
    <View style={styles.container}>
        
        {loading ? <Loader />
    
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

        <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
        disabled={showResults}
        >

            <Text style={styles.submitButtonText}>Submit</Text>

        </TouchableOpacity>

        {showResults && (
                    <View style={styles.result}>
                        <Text style={styles.resultText}>You Scored {score} out of {Question.length}</Text>

                        <TouchableOpacity
                        style={styles.tryAgainButton}
                        onPress={getQuestions}
                        >

                            <Text style={styles.tryAgainButtontext}>Try Again</Text>

                        </TouchableOpacity>
                    </View>
                )}
    </View>
  )
}

export default AptQuiz

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
        width: 350,
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
    }

})