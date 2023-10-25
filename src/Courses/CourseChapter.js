import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import {useNavigation} from '@react-navigation/native'
import ProgressBar from './ProgressBar'


const CourseChapter = () => {
    const navigation = useNavigation();

    const param = useRoute().params ;
    const [chapter,setChapter] = useState([])
    let chapterRef ;
    const [currenIndex,setCurrentIndex] = useState(0)
    const [progress,setProgress] = useState(0);

    useEffect(() => {
        // console.log('Course content : ',param.courseContent)
        setProgress(0);
        setChapter(param.courseContent.chapters)
    },[])

    const onClickNext = (index) => {
      setProgress(index+1/chapter.length)
        try{
            chapterRef.scrollToIndex({animated:true,index:index+1})
        }

        catch(e){
            console.log(e)
            navigation.goBack()
        }
    }


  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      ref={(ref) => {
        chapterRef = ref
      }}
      data={chapter}
      renderItem={({item,index}) => (
        <View style={{width: Dimensions.get('screen').width*0.98,marginRight: 50,padding: 20}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>

            <TouchableOpacity onPress={() => onClickNext(index)}>
                <Text style={styles.btn}>Next</Text>
            </TouchableOpacity>

            
        </View>
      )}

      
      />


    </View>
  )
}

export default CourseChapter

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    backgroundColor: 'white',
    // alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    color: 'blue',
    width: 100,
    textAlign: 'center',
    fontSize: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: 'lightblue',
    borderWidth: 1
  },

  container: {
    flex: 1,
    // marginLeft: 10,
    marginTop: 10
  },

  title: {
    fontSize: 30,
    color: 'brown',
    borderColor: 'brown',
    borderWidth: 1,
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'aliceblue'
  },

  content: {
    borderColor: 'tan',
    borderWidth: 1,
    marginVertical: 20,
    padding: 10,
    lineHeight: 25,
    backgroundColor: 'snow',
  }
})