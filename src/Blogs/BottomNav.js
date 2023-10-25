import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {AntDesign,Ionicons,FontAwesome5} from '@expo/vector-icons';
import {colors} from '../globals/style';

const BottomNav = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.btncon1}>
            <AntDesign name='home' size={24} color='black' style={styles.icon1} onPress={() => {navigation.navigate('blogs')}} />
        </View>

        <View style={styles.btncon1}>
        <AntDesign name="pluscircleo" size={40} color='black' style={styles.icon2} onPress={() => {navigation.navigate('addblog')}} />
        </View>

        {/* <View style={styles.btncon1}>
        <AntDesign name="delete" size={30} color='black' style={styles.icon1} onPress={() => {navigation.navigate('delete')}} />
        </View> */}

    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        elevation: 30,
        borderTopColor: 'darkblue',
        borderTopWidth: 0.8,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        bottom: 0,
    },

    icon1: {
        color: 'darkblue',
    },

    icon2: {
        color: 'darkblue',
    },

    btncon2: {
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'relative',
        elevation: 10,
        // top: -15,
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 50,
    },

    btncon1: {
        backgroundColor: colors.col1,
        elevation: 10,
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }

})