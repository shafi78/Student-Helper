import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { icons, SIZES } from '../../../constants'
import styles from './welcome.style'
import { useNavigation } from '@react-navigation/native';
import { firebase, auth} from '../../../../../firebase/FirebaseConfig';


const jobTypes = ['Full-time','Part-time','Contractor'];

const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {

  const navigation = useNavigation();

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


  // const router = useRouter();
  
  const [activeJobType, setactiveJobType] = useState('Full-time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello , {userdata ? <Text>{userdata.name}</Text> : 'loading'}</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput 
            style={styles.searchInput} 
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
            />
          </View>

          <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
        </View>

    
    </View>
  )
}

export default Welcome

