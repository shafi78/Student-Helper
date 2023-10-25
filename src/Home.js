import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HomeHeadNav from './Login/HomeHeadNav';
import { StatusBar } from 'expo-status-bar';


const MainPage = () => {

        const navigation = useNavigation();

  return (

          <View>
            <StatusBar backgroundColor='skyblue' hidden={true}/>
        <View style={styles.container}>
        <HomeHeadNav />
        {/* <View style={styles.c1}>
                <Text style={styles.txt1}>Student Helper</Text>
        </View> */}

        <View style={styles.container2}>
        <TouchableOpacity style={styles.c2} onPress={() => navigation.navigate('qnacat')}>
                <Text style={styles.txt2}>QNA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.c2} onPress={() => navigation.navigate('webinars')}>
                <Text style={styles.txt2}>Webinars</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.c2} onPress={() => navigation.navigate('blogs')}>
                <Text style={styles.txt2}>Blogs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.c2} onPress={() => navigation.navigate('aptitude')}>
                <Text style={styles.txt2}>Aptitude</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.c2} onPress={() => navigation.navigate('dsa')}>
                <Text style={styles.txt2}>DSA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.c2} onPress={() => navigation.navigate('courses')}>
                <Text style={styles.txt2}>Courses</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity style={styles.c2} onPress={() => navigation.navigate('jobs')}>
                <Text style={styles.txt2}>Jobs</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.c2} onPress={() => navigation.navigate('chatbot')}>
                <Text style={styles.txt2}>Chat Bot</Text>
        </TouchableOpacity>
        
        </View>
        </View>
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 10,
        // marginTop: 50,
    },

    container2: {
        width: '80%',
        height: 100,
        paddingVertical: 10,
        marginLeft: 40,
        marginTop: 20
    },

    c1: {
        borderWidth: 1.5,
        paddingVertical: 20,
        backgroundColor: 'snow',
        borderColor: 'teal',
        borderRadius: 50,
        marginBottom: 10,
        marginTop: 20
    },
    
    c2: {
        // paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'goldenrod',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 15,
        backgroundColor: 'snow',
    },
    
    txt1: {
        textAlign: 'center',
        color: 'navy',
        fontSize: 30,
        letterSpacing: 1
    },

    txt2: {
        fontSize: 20,
        color: 'maroon'
    }
})