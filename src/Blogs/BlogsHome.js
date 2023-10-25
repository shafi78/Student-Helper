import { StyleSheet, Text, View , TouchableOpacity , FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import {firebase} from '../../firebase/FirebaseConfig'
import BottomNav from './BottomNav';
import { COLORS, FONT, SHADOWS, SIZES } from "../Jobs/constants";
import { Colors } from 'react-native/Libraries/NewAppScreen';


const BlogsHome = ({navigation}) => {

    const [blogs,setBlogs] = useState([]);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
          getBlogs();
        }, 1000);
      }, []);

  const getBlogs = async() => {
    const db = firebase.firestore().collection('Blogs').orderBy('Time','desc');


    try {
        
        const snapshot = await db.get();
        const data = snapshot.docs.map(doc => doc.data());
        // console.log(data);

        setBlogs(data);
    }catch (error)
    {
        console.log(error);
        alert("Something went wrong !")
    }
  };

  useEffect(() => {
    getBlogs()
  },[])

  




    return (
        <View style={styles.container}>
            <FlatList

            data = {blogs}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item,index}) => (
                <View style={styles.questionContainer}>
                    <Text style={styles.question}>
                        {item.title}
                    </Text>

                    <Text style={styles.name}>- {item.name}</Text>

                    <Text style={styles.answer}>
                        {item.content}
                    </Text>

                    <Text style={styles.time}>{item.Time}</Text>

                </View>
            )}
            />
    
    <BottomNav navigation={navigation} />
           
        </View>
      )
}

export default BlogsHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
    },

    questionContainer: {
        backgroundColor: 'snow',
        marginTop: 40,
        marginBottom: 10,
        padding: 20,
        elevation: 5 ,
    },

    question: {
        fontSize: 25,
        fontWeight: '600',
        marginVertical: 20,
        color: 'red',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'darkblue'
    },

    answer: {
        marginTop: 30,
        borderColor: 'bisque',
        borderWidth: 1,
        padding: 20,
        backgroundColor: 'white'
    }
    ,

   name: {
    width: '100%',
    marginLeft: '70%',
   },

   time: {
    fontSize: 10,
    marginLeft: '60%',
    marginTop: 20,
    color: 'darkred'
   }

})