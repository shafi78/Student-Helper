import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const CourseContent = ({course}) => {

  const navigation = useNavigation();

  return (
    <View style={{marginTop: 50}}>
      <Text style={styles.content}>Course Content</Text>
      <FlatList
      
      data={course?.topics}
      renderItem={({item,index}) => (
        <TouchableOpacity style={styles.contents} onPress={() => navigation.navigate('courseChapter',{courseContent:item})}>
           
            <Text>{index+1}. {item.title}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

export default CourseContent

const styles = StyleSheet.create({
  content: {
    textAlign: 'center',
    fontSize: 20,
    color: 'maroon',
    marginBottom: 20
  },

  contents: {
    width: '75%',
    textAlign: 'center',
    marginLeft: 50,
    marginVertical: 10,
    borderColor: 'lightsteelblue',
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'aliceblue',
    borderRadius: 10
  }
})