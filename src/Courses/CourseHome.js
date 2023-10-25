import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {firebase} from '../../firebase/FirebaseConfig'

const CourseHome = ({navigation}) => {

  const [courseData,setCourseData] = useState([]);

  const foodRef = firebase.firestore().collection('Courses');

  useEffect(() => {
    foodRef.onSnapshot(snapshot => {
      setCourseData(snapshot.docs.map(doc => doc.data()))
    })
  },[])

  const onPressCourse = (courseData) =>
  {
    console.log("Course :",courseData)
    navigation.navigate('coursepage',{courseData: courseData})
  } 

  return (
    <View style={{padding: 20}}>
      <FlatList
      showsVerticalScrollIndicator={false}
        data = {courseData}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({item,index}) => (
          <TouchableOpacity style={styles.questionContainer} onPress={() => onPressCourse(item)}>
                <Text style={styles.question}>
                   {item.title}
                </Text>
                <Text style={styles.answer}>{item.description}</Text>

            </TouchableOpacity>
        )}
        />

    </View>
  )
}

export default CourseHome

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    width: '100%',
    height: 200,
    borderColor: 'papayawhip',
    borderWidth: 1,
    marginVertical: 20,
    borderRadius: 0,
    backgroundColor: 'snow',
    marginTop: 50,
    elevation: 5,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50
  },

  question: {
    textAlign: 'center',
    fontSize: 40,
    marginVertical: 30,
    color: 'firebrick',
    borderRadius: 10,
    fontWeight: 500
   
  },

  answer: {
    textAlign: 'center',
    marginTop: '5%',
    borderColor: 'moccasin',
    borderWidth: 1,
    borderBottomRightRadius: 50,
    height: 70,
    // borderRadius: 20,
    padding: 20,
    backgroundColor: 'snow',
  }
})