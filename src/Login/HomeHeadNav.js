import React from 'react'
import { StyleSheet , View , Text, TouchableOpacity } from 'react-native'
import { FontAwesome, Ionicons ,EvilIcons, Entypo } from '@expo/vector-icons';
import { colors } from '../globals/style';
import { useNavigation } from '@react-navigation/native'


const HomeHeadNav = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>

<TouchableOpacity onPress={() => {navigation.navigate('logout')}}>
        <FontAwesome name="navicon" size={22} color="darkblue" style={StyleSheet.myicon} />
</TouchableOpacity>

<View style={styles.containerin}>
            <Text style={styles.mytext}>Student Helper</Text>
            <Entypo name="book" size={34} color="darkblue" />
</View>

        <TouchableOpacity onPress={() => {navigation.navigate('userprofile')}}>
        <EvilIcons name="user" size={38} color="darkblue" style={styles.myicon} />
        </TouchableOpacity>
        
    </View>
  )
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.col1,
        elivation: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    containerin: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    myicon: {
        paddingTop: 3
    },

    mytext: {
        fontSize: 30,
        marginTop: 3,
        color: 'darkblue',
        paddingRight: 10
    }

})