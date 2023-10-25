import { StyleSheet, Text, View , TouchableOpacity , FlatList, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {firebase} from '../../firebase/FirebaseConfig'
import { btn1, colors, titles } from '../globals/style';
import BottomNav from './BottomNav';

const AddBlog = ({navigation}) => {

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    
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

        const docRef = firebase.firestore().collection('Blogs').doc(new Date().getTime().toString());

        docRef.set({
            blogid: docRef.id,
            name: userdata.name,
            uid: userloggeduid,
            title: title,
            content: content,
            Time : new Date().toLocaleString()
        }).then(() => {
            alert('Blog posted successfully')
            navigation.navigate('blogs')
            
        })

    }



    return (
        <View style={styles.container}>
        
        <Text style={styles.title1}>Title: </Text>
        <View style={styles.inputout}>
        <TextInput
        style={styles.input1}
        placeholder='Enter the title of your blog'
        onChangeText={(text) => setTitle(text)}
        />
        </View>
        
        <Text style={styles.title2}>Content: </Text>
        <ScrollView style={styles.scroll}>
        <View style={styles.inputout}>
        <TextInput
        style={styles.input2}
        placeholder='Your text goes here'
        multiline={true}
        onChangeText={(text) => setContent(text)}
        />
        </View>
        </ScrollView>

        <TouchableOpacity style={btn1} onPress={() => handleSubmit()}>
      <Text
        style={{
          color: colors.col1,
          fontSize: titles.btntxt,
          fontWeight: "bold",
        }}
      >
        Post
      </Text>
    </TouchableOpacity>


    <BottomNav navigation={navigation} />
        </View>
        
      )
}

export default AddBlog

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input1: {
        fontSize: 15,
        marginLeft: 10,
        width: "80%",
      },
    
      input2: {
        fontSize: 15,
        marginLeft: 10,
        paddingVertical: 20,
        width: "100%",
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        
    },

    scroll: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    
    inputout: {
        flexDirection: "row",
        width: "94%",
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: 10,
        // paddingHorizontal: 10,
        paddingVertical: 7,
        // alignSelf: "center",
        elevation: 20,
      },

      title1: {
        flexDirection: 'row',
        fontSize: 25,
        letterSpacing: 1,
        marginTop: 100,
        marginBottom: 20
      },
      
      title2: {
        flexDirection: 'row',
        fontSize: 25,
        letterSpacing: 1,
        marginTop: '10%'
      }



})