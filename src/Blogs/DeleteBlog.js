import { FlatList, StyleSheet, Text, TouchableOpacity, View ,Image, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import {firebase , auth} from '../../firebase/FirebaseConfig';
import { btn2, colors, navbtn, navbtnin, navbtnout } from '../globals/style';
import {AntDesign} from '@expo/vector-icons';
import BottomNav from './BottomNav';
import {doc,deleteDoc, deleteField} from 'firebase/firestore'

const DeleteBlog = ({navigation}) => {
    const [blogData,setBlogData] = useState(null);

    const getBlogData = async () => {
      const ordersRef = firebase.firestore().collection('Blogs').where('uid', '==', firebase.auth().currentUser.uid) ;
      ordersRef.onSnapshot(snapshot => {
          setBlogData(snapshot.docs.map(doc => doc.data()))
      })
  }

    useEffect(() => {
      getBlogData();
    },[]);

    
    
// console.log(blogData)

const deleteitem = async (item) => {
    // Reference to the Firestore collection where your items are stored
    const itemsRef = firebase.firestore().collection('Blogs');
    // setBlogData(itemsRef)
    console.log(item)
    // itemsRef.delete('blogid');
    alert("Deleted")
        
}






  return (
    <View style={styles.containerout}>
      

      <View style={styles.bottomnav}>
        <BottomNav navigation={navigation} />
      </View>

      <View styles={styles.container}>
        <Text style={styles.head1}>
          Your Blogs
        </Text>
        <View style={styles.cartout}>
        {blogData == null || blogData.length <= 0 ?
        <Text style={styles.head2}>No Blog To Found Delete</Text>
        :
        <FlatList style={styles.cardlist} data={blogData} 
        renderItem={
          ({item}) => {
            return(
              <View style={styles.cartcard}>
                

                <View style={styles.cartcardin}>
                  <View style={styles.c1}>

                    <Text style={styles.txt1}>{item.title}</Text>

                    <Text style={styles.txt2}>{item.content}</Text>

                    <TouchableOpacity style={styles.c4}
                  onPress={(item) => deleteitem(item)}
                  >
                    <Text style={styles.txt3}>Delete</Text>
                    <AntDesign name='delete' size={24} color='black' style={styles.del} />

                  </TouchableOpacity>

                  </View>
                 
                  
                </View>

              </View>
            )
          }
        }
        />
         } 
         </View> 

        

      </View>
    </View>
  )
}

export default DeleteBlog

const styles = StyleSheet.create({
  bottomnav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.col1,
    zIndex: 20,
  },

  containerout: {
    backgroundColor: 'white',
    width: '100%',
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: colors.col1,
    width: '100%',
    // alignItems: 'center',
  },

  head1: {
    fontSize: 40,
    textAlign: 'center',
    color: colors.text1,
    marginTop: '15%',
    marginBottom: 20
  },

  content: {
    width: '100%',
    height: 100
  },

  head2: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '200',
    marginVertical: 20,
    elevation: 10,
    backgroundColor: colors.col1,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: '25%',
    borderRadius: 10,
  },

  cardlist: {
    width: '100%'
  },

  cartcard: {
    flexDirection: 'row',
    backgroundColor: colors.col1,
    marginVertical: 5,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    elevation: 10,
    alignItems: 'center'
  },

  cartimg: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },

  cartcardin: {
    flexDirection: 'column',
    margin: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  c1: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.col1,
  },

  c2: {
    backgroundColor: colors.text1,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    padding: 5,
    flexDirection: 'row',
  },

  txt1: {
    fontSize: 15,
    color: colors.text1,
    width: '60%',
    fontWeight: 'bold',
    marginLeft: 10,
    width: '30%'
  },



  txt2: {
    fontSize: 10,
    color: colors.text3,
    width: '50%',
    borderColor: 'red',
    borderWidth: 1,
    padding: 5
  },

  txt3: {
    fontSize: 1,
    color: colors.col1,
    width: '10%',
  },

  del: {
    color: colors.text1,
  },

  c4: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    borderRadius: 10,
    borderColor: colors.text1,
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
    marginLeft: 10
  },

  btncont: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        flexDirection: 'row',
        marginBottom: 80,
        borderTopColor: colors.text3,
        borderTopWidth: 0.2,
  },

  btntxt: {
    backgroundColor: colors.text1,
        color: colors.col1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        borderRadius: 10,
        width: '90%',
        textAlign: 'center',
  },

  c3: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  txt5: {
    fontSize: 20,
    color: colors.text3,
    marginHorizontal: 5,
  },

  txt6: {
    fontSize: 25,
    color: colors.text3,
    marginHorizontal: 5,
    fontWeight: 'bold',
  }


})