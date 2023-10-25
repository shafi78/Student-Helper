import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Button,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { firebase } from "../../firebase/FirebaseConfig.js";
  import {Video,AVPlaybackStatus} from 'expo-av';
//   import * as ScreenOrientation from 'expo-screen-orientation';
import Loader from "../Loader.js";
  
  
  const WebinarHome = () => {

    const [loading,setLoading] = useState(false);
    const [webVideo,setWebVideo] = useState(null);
  
    
    const getData = async () => {
      setLoading(true);
      const db = firebase.firestore().collection("Webinars");
  
      try {
        const snapshot = await db.get();
        const data = snapshot.docs.map((doc) => doc.data());
        // console.log(data);
        setLoading(false);
        setWebVideo(data);
      } catch (error) {
        console.log(error);
        alert("Something went wrong !");
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <View style={styles.container}>
        
        {loading ?
      <Loader />
      :
      <FlatList
          data={webVideo}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                {item.title} 
              </Text>
  
  
              <Video source={{uri: item.videoUrl}}
              useNativeControls
              resizeMode="contain"
              isLooping
              shouldPlay={true}
              // onPlaybackStatusUpdate={handleVideoStatusUpdate}
              
              style={{width:'100%',height: 200,borderColor: 'grey',borderWidth: 1,
            }}
  
            /> 
  
  
             <Text style={styles.time}>{item.Time}</Text>
             <Text style={styles.answer}>{item.videoDescription}.</Text>
  
           
            </View>
          )}
        />  
      }
         
      </View>
    )
  }
  
  export default WebinarHome;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: '#F5F5F5',
      justifyContent: "center",
      // marginTop: 50
    },
  
    questionContainer: {
      backgroundColor: "#fff",
      borderRadius: 20,
      marginVertical: 10,
      padding: 20,
      elevation: 10,
      width: 390,
    },
  
    question: {
        textAlign: 'center',
      fontSize: 30,
      fontWeight: "300",
      color: "darkblue",
      marginVertical: 10,
      alignSelf: 'center',
      textTransform: 'uppercase',
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: 'snow',
      elevation: 5
    },
  
    answer: {
      fontSize: 20,
      fontWeight: "300",
      color: "black",
      marginTop: '5%',
      backgroundColor: 'snow',
      borderWidth: 1,
      padding: 10,
      borderColor: 'lightgray'
    },

    time: {
        marginLeft: '64%',
        fontSize: 12,
        marginTop: 20,
    }
  });
  