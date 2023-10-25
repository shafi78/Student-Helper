import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native'
// import { Stack,useRouter } from 'expo-router';
import { useState } from 'react';
import {COLORS,icons,images,SIZES} from './constants';
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from './components';
import { useNavigation } from '@react-navigation/native'


const JobsHome = () => {

  // const router = useRouter();
  const navigation = useNavigation();

  const [searchTerm,setSearchTerm] = useState("");

  return (

    <SafeAreaView style={{flex:1, backgroundColor: 'COLORS.lightWhite'}}>


    <ScrollView showsVerticalScrollIndicator={false}>
        <View
        style={{
            flex: 1,
            padding: SIZES.medium,
        }}
        >

            <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if(searchTerm)
              {
                navigation.navigate('searchpage',searchTerm)
              }
            }}
            />
            <Popularjobs />
            <Nearbyjobs />

        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default JobsHome

const styles = StyleSheet.create({})

