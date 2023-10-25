import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { navbtn, navbtnin } from '../globals/style'
import { AntDesign } from '@expo/vector-icons';
import { colors, btn2, titles } from '../globals/style';
import { useNavigation } from '@react-navigation/native'
import { firebase, auth} from '../../firebase/FirebaseConfig';

const Userprofile = () => {

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

    // console.log(userdata);




    const logoutuser = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            alert('you are logged out');
            navigation.navigate('login');
        }).catch((error) => {
            // An error happened.
            alert('Server Issue');
        });
    }
    
    return (
        <View style={styles.containerout}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
                <View style={navbtn}>
                    <AntDesign name="back" size={24} color="black" style={navbtnin} />
                </View>
            </TouchableOpacity>

            <View style={styles.container}>

            <TouchableOpacity onPress={() => logoutuser()}>
                <View style={styles.btn2}>
                    <Text style={styles.btntxt}>Logout</Text>
                </View>
            </TouchableOpacity>

            </View>

        </View>
    )
}

export default Userprofile

const styles = StyleSheet.create({
    containerout: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        width: '100%',
        // marginTop: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    head1: {
        fontSize: 40,
        fontWeight: '300',
        marginVertical: 20,
        color: 'darkblue',
    },
    containerin: {
        width: '90%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'darkblue',
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    head2: {
        fontSize: 20,
        fontWeight: '300',
        marginTop: 20,
    },
    head2in: {
        fontSize: 20,
        fontWeight: '400',
    },
    inputout: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10,
        backgroundColor: 'darkblue',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        // alignSelf: 'center',
        elevation: 20,
    },
    btntxt: {
        fontSize: 25,
        fontWeight: '400',
        color: 'white',
        textAlign: 'center',
        padding: 10,

    },
    input: {
        width: '100%',
        marginVertical: 10,
        backgroundColor: colors.col1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        elevation: 20,
    },

    btn2: {
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 5,
        marginTop: 10,
        width: '100%',
    }
})