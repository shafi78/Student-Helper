import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import CourseContent from './CourseContent';

const CoursePage = ({navigation}) => {

  const param = useRoute().params ;
  const [course,setCourse] = useState([])

  useEffect(() => {
    setCourse(param.courseData)
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.desc}>{course.description}</Text>
      <CourseContent course={course} />
    </View>
  )
}

export default CoursePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 1
  },

  title: {
    borderColor: 'goldenrod',
    borderTopWidth: 1,
    fontSize: 35,
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: 'snow',
    color: 'darkred',
    fontWeight: 400
  },

  desc: {
    borderColor: 'goldenrod',
    borderBottomWidth: 1,
    fontSize: 15,
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: 'snow',
    color: 'brown',
  }
})